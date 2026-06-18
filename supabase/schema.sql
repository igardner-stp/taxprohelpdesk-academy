-- =============================================================================
-- TaxProHelpDesk Training Academy — schema + Row Level Security
-- Run this once in the Supabase SQL editor (or via the CLI) on a fresh project.
-- Idempotent-ish: safe to re-run (drops policies/functions before recreating).
-- =============================================================================

-- gen_random_uuid() lives in pgcrypto (present on Supabase by default).
create extension if not exists pgcrypto;

-- -----------------------------------------------------------------------------
-- TABLES
-- profiles <-> bureaus are mutually referential, so we add the bureau FK after
-- both tables exist.
-- -----------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  email       text not null,
  role        text not null default 'learner'
              check (role in ('admin','bureau_supervisor','learner')),
  bureau_id   uuid,
  created_at  timestamptz not null default now()
);

create table if not exists public.bureaus (
  id                  uuid primary key default gen_random_uuid(),
  name                text not null,
  supervisor_user_id  uuid references public.profiles(id) on delete set null,
  created_at          timestamptz not null default now()
);

do $$ begin
  alter table public.profiles
    add constraint profiles_bureau_id_fkey
    foreign key (bureau_id) references public.bureaus(id) on delete set null;
exception when duplicate_object then null; end $$;

create table if not exists public.tracks (
  id           text primary key,            -- 'ero' | 'bureau' (extensible)
  name         text not null,
  description  text,
  order_index  int not null default 0
);

create table if not exists public.user_tracks (
  user_id      uuid not null references public.profiles(id) on delete cascade,
  track_id     text not null references public.tracks(id) on delete cascade,
  assigned_at  timestamptz not null default now(),
  primary key (user_id, track_id)
);

create table if not exists public.modules (
  id           uuid primary key default gen_random_uuid(),
  track_id     text not null references public.tracks(id) on delete cascade,
  title        text not null,
  description  text,
  order_index  int not null default 0,
  created_at   timestamptz not null default now()
);

create table if not exists public.lessons (
  id           uuid primary key default gen_random_uuid(),
  module_id    uuid not null references public.modules(id) on delete cascade,
  title        text not null,
  body         text not null default '',
  video_url    text,
  image_urls   text[],
  tags         text[],
  order_index  int not null default 0,
  created_at   timestamptz not null default now()
);

-- Interactive narrated experience (code-driven slides + ElevenLabs audio).
-- Nullable: lessons without a manifest fall back to the markdown/video render.
-- Added via ALTER so the table definition stays re-runnable on existing DBs.
alter table public.lessons add column if not exists media_manifest jsonb;

create table if not exists public.quizzes (
  id              uuid primary key default gen_random_uuid(),
  lesson_id       uuid not null unique references public.lessons(id) on delete cascade,
  questions       jsonb not null default '[]'::jsonb,
  pass_threshold  int not null default 70
);

create table if not exists public.lesson_progress (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  lesson_id     uuid not null references public.lessons(id) on delete cascade,
  completed     boolean not null default false,
  quiz_score    int,
  completed_at  timestamptz,
  unique (user_id, lesson_id)
);

create table if not exists public.certificates (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  track_id    text not null references public.tracks(id) on delete cascade,
  issued_at   timestamptz not null default now(),
  unique (user_id, track_id)
);

-- ---- Indexes ----------------------------------------------------------------
create index if not exists idx_profiles_bureau          on public.profiles(bureau_id);
create index if not exists idx_modules_track            on public.modules(track_id, order_index);
create index if not exists idx_lessons_module           on public.lessons(module_id, order_index);
create index if not exists idx_user_tracks_user         on public.user_tracks(user_id);
create index if not exists idx_lesson_progress_user     on public.lesson_progress(user_id);
create index if not exists idx_lesson_progress_lesson   on public.lesson_progress(lesson_id);

-- -----------------------------------------------------------------------------
-- HELPER FUNCTIONS (SECURITY DEFINER)
-- These run as the table owner, bypassing RLS, so policies that call them do
-- NOT recurse. auth.uid() reads the request JWT regardless of definer context.
-- -----------------------------------------------------------------------------
create or replace function public.is_admin() returns boolean
  language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

create or replace function public.is_bureau_supervisor() returns boolean
  language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'bureau_supervisor');
$$;

create or replace function public.supervises(target uuid) returns boolean
  language sql stable security definer set search_path = public as $$
  select exists(
    select 1
    from public.profiles p
    join public.bureaus b on b.id = p.bureau_id
    where p.id = target and b.supervisor_user_id = auth.uid()
  );
$$;

create or replace function public.current_bureau_id() returns uuid
  language sql stable security definer set search_path = public as $$
  select bureau_id from public.profiles where id = auth.uid();
$$;

create or replace function public.user_assigned_track(tid text) returns boolean
  language sql stable security definer set search_path = public as $$
  select exists(
    select 1 from public.user_tracks where user_id = auth.uid() and track_id = tid
  );
$$;

create or replace function public.track_of_module(mid uuid) returns text
  language sql stable security definer set search_path = public as $$
  select track_id from public.modules where id = mid;
$$;

create or replace function public.track_of_lesson(lid uuid) returns text
  language sql stable security definer set search_path = public as $$
  select m.track_id
  from public.lessons l join public.modules m on m.id = l.module_id
  where l.id = lid;
$$;

-- -----------------------------------------------------------------------------
-- AUTO-PROFILE on signup. Every new auth user gets a 'learner' profile; an
-- admin then assigns the real role / tracks / bureau via the admin portal.
-- -----------------------------------------------------------------------------
create or replace function public.handle_new_user() returns trigger
  language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    'learner'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- -----------------------------------------------------------------------------
-- ROW LEVEL SECURITY
-- -----------------------------------------------------------------------------
alter table public.profiles        enable row level security;
alter table public.bureaus         enable row level security;
alter table public.tracks          enable row level security;
alter table public.user_tracks     enable row level security;
alter table public.modules         enable row level security;
alter table public.lessons         enable row level security;
alter table public.quizzes         enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.certificates    enable row level security;

-- Drop existing policies so this file is re-runnable.
do $$
declare r record;
begin
  for r in
    select policyname, tablename from pg_policies where schemaname = 'public'
  loop
    execute format('drop policy if exists %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

-- ---- profiles ---------------------------------------------------------------
-- Read: self, admins (all), bureau supervisors (their downline EROs only).
create policy profiles_select on public.profiles for select
  using ( id = auth.uid() or public.is_admin() or public.supervises(id) );
-- Write: admins only (app uses the service-role client for invites).
create policy profiles_insert on public.profiles for insert
  with check ( public.is_admin() );
create policy profiles_update on public.profiles for update
  using ( public.is_admin() ) with check ( public.is_admin() );
create policy profiles_delete on public.profiles for delete
  using ( public.is_admin() );

-- ---- bureaus ----------------------------------------------------------------
create policy bureaus_select on public.bureaus for select
  using (
    public.is_admin()
    or supervisor_user_id = auth.uid()
    or id = public.current_bureau_id()
  );
create policy bureaus_write on public.bureaus for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- tracks -----------------------------------------------------------------
create policy tracks_select on public.tracks for select
  using ( auth.uid() is not null );
create policy tracks_write on public.tracks for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- user_tracks ------------------------------------------------------------
create policy user_tracks_select on public.user_tracks for select
  using ( user_id = auth.uid() or public.is_admin() or public.supervises(user_id) );
create policy user_tracks_write on public.user_tracks for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- modules ----------------------------------------------------------------
-- Learners: only their assigned tracks. Bureau supervisors may read the
-- curriculum structure (needed to compute downline completion %). Admins: all.
create policy modules_select on public.modules for select
  using ( public.is_admin() or public.is_bureau_supervisor() or public.user_assigned_track(track_id) );
create policy modules_write on public.modules for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- lessons ----------------------------------------------------------------
create policy lessons_select on public.lessons for select
  using ( public.is_admin() or public.is_bureau_supervisor() or public.user_assigned_track(public.track_of_module(module_id)) );
create policy lessons_write on public.lessons for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- quizzes ----------------------------------------------------------------
-- Readable by track-assigned learners (the lesson player strips answers before
-- they reach the client; grading happens in a server action). Admins manage.
create policy quizzes_select on public.quizzes for select
  using ( public.is_admin() or public.user_assigned_track(public.track_of_lesson(lesson_id)) );
create policy quizzes_write on public.quizzes for all
  using ( public.is_admin() ) with check ( public.is_admin() );

-- ---- lesson_progress --------------------------------------------------------
create policy lesson_progress_select on public.lesson_progress for select
  using ( user_id = auth.uid() or public.is_admin() or public.supervises(user_id) );
create policy lesson_progress_insert on public.lesson_progress for insert
  with check ( user_id = auth.uid() );
create policy lesson_progress_update on public.lesson_progress for update
  using ( user_id = auth.uid() ) with check ( user_id = auth.uid() );
create policy lesson_progress_delete on public.lesson_progress for delete
  using ( user_id = auth.uid() or public.is_admin() );

-- ---- certificates -----------------------------------------------------------
create policy certificates_select on public.certificates for select
  using ( user_id = auth.uid() or public.is_admin() or public.supervises(user_id) );
create policy certificates_insert on public.certificates for insert
  with check ( user_id = auth.uid() or public.is_admin() );
create policy certificates_delete on public.certificates for delete
  using ( public.is_admin() );

-- =============================================================================
-- FIRST ADMIN: after inviting/creating your own user and signing in once, run:
--   update public.profiles set role = 'admin' where email = 'you@example.com';
-- =============================================================================
