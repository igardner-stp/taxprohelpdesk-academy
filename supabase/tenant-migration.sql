-- =============================================================================
-- White-label tenants — run once in the Supabase SQL Editor.
-- =============================================================================

-- Tenants table
create table if not exists public.tenants (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  slug       text not null unique,   -- subdomain: <slug>.taxprotraining.com
  logo_url   text,
  created_at timestamptz not null default now()
);

alter table public.tenants enable row level security;

-- Anyone (including the anon middleware fetch) can read tenant branding.
create policy tenants_select on public.tenants
  for select using (true);

-- Only admins can write.
create policy tenants_write on public.tenants
  for all using (public.is_admin()) with check (public.is_admin());

-- =============================================================================
-- Storage bucket for tenant logos — run this block separately if needed.
-- Or create the bucket manually in the Supabase dashboard (Storage tab):
--   name: tenant-logos, Public bucket: YES
-- =============================================================================
insert into storage.buckets (id, name, public)
  values ('tenant-logos', 'tenant-logos', true)
  on conflict (id) do nothing;

-- Allow anyone to read objects in the public bucket.
create policy tenant_logos_public_read on storage.objects
  for select using (bucket_id = 'tenant-logos');

-- Only service role (server actions) can upload / delete.
create policy tenant_logos_admin_write on storage.objects
  for insert with check (bucket_id = 'tenant-logos');

create policy tenant_logos_admin_delete on storage.objects
  for delete using (bucket_id = 'tenant-logos');
