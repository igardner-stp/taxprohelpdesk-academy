"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getSessionUser } from "@/lib/auth";
import type { Role, QuizQuestion } from "@/lib/types";

// ---------------------------------------------------------------------------
// Guard helper — every action must call this first.
// ---------------------------------------------------------------------------
async function requireAdmin(): Promise<
  { ok: true; userId: string } | { ok: false; error: string }
> {
  const s = await getSessionUser();
  if (s?.profile?.role !== "admin") {
    return { ok: false, error: "Not authorized." };
  }
  return { ok: true, userId: s.authUser.id };
}

// ---------------------------------------------------------------------------
// User / invite management
// ---------------------------------------------------------------------------

export async function inviteUser({
  fullName,
  email,
  role,
  trackIds,
  bureauId,
}: {
  fullName: string;
  email: string;
  role: Role;
  trackIds: string[];
  bureauId?: string | null;
}): Promise<
  | { ok: true; inviteLink: string; tempPassword: string; email: string }
  | { error: string }
> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const admin = createAdminClient();

  // Generate a strong temp password (16 chars, mixed).
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%";
  let tempPassword = "";
  for (let i = 0; i < 16; i++) {
    tempPassword += chars[Math.floor(Math.random() * chars.length)];
  }

  // 1. Create the auth user.
  const { data: authData, error: authError } =
    await admin.auth.admin.createUser({
      email,
      password: tempPassword,
      email_confirm: true,
      user_metadata: { full_name: fullName },
    });

  if (authError) {
    // Provide a friendlier message for duplicate accounts.
    const msg = authError.message.toLowerCase();
    if (msg.includes("already") || msg.includes("duplicate") || msg.includes("exists")) {
      return { error: "A user with that email already exists." };
    }
    return { error: authError.message };
  }

  const newUserId = authData.user?.id;
  if (!newUserId) return { error: "Failed to create auth user." };

  // 2. Update the auto-created profile (trigger creates it as 'learner').
  const { error: profileError } = await admin
    .from("profiles")
    .update({
      role,
      full_name: fullName,
      bureau_id: role === "learner" ? (bureauId ?? null) : null,
    })
    .eq("id", newUserId);

  if (profileError) return { error: profileError.message };

  // 3. Assign tracks.
  if (trackIds.length > 0) {
    const rows = trackIds.map((track_id) => ({
      user_id: newUserId,
      track_id,
    }));
    const { error: trackError } = await admin.from("user_tracks").insert(rows);
    if (trackError) return { error: trackError.message };
  }

  // 4. Generate a password-reset / setup link so the user can set their own
  //    password. In production with SMTP configured, you'd use
  //    admin.auth.admin.inviteUserByEmail() instead, which sends the email
  //    automatically. For now we return the link + temp password so the admin
  //    can manually share it when SMTP is not configured.
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const { data: linkData, error: linkError } =
    await admin.auth.admin.generateLink({
      type: "recovery",
      email,
      options: {
        redirectTo: `${baseUrl}/auth/callback?next=/set-password`,
      },
    });

  const inviteLink =
    !linkError && linkData?.properties?.action_link
      ? linkData.properties.action_link
      : `${baseUrl}/login`;

  revalidatePath("/admin/users");
  revalidatePath("/admin");

  return { ok: true, inviteLink, tempPassword, email };
}

export async function setUserRole(
  userId: string,
  role: Role
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  // Prevent admin from demoting themselves.
  if (userId === guard.userId && role !== "admin") {
    return { error: "You cannot change your own role away from admin." };
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("profiles")
    .update({ role })
    .eq("id", userId);

  if (error) return { error: error.message };

  revalidatePath("/admin/users");
  return { ok: true };
}

export async function assignTracks(
  userId: string,
  trackIds: string[]
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const admin = createAdminClient();

  // Replace: delete existing, insert new set.
  const { error: delError } = await admin
    .from("user_tracks")
    .delete()
    .eq("user_id", userId);

  if (delError) return { error: delError.message };

  if (trackIds.length > 0) {
    const rows = trackIds.map((track_id) => ({ user_id: userId, track_id }));
    const { error: insError } = await admin.from("user_tracks").insert(rows);
    if (insError) return { error: insError.message };
  }

  revalidatePath("/admin/users");
  return { ok: true };
}

export async function setUserBureau(
  userId: string,
  bureauId: string | null
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const admin = createAdminClient();
  const { error } = await admin
    .from("profiles")
    .update({ bureau_id: bureauId })
    .eq("id", userId);

  if (error) return { error: error.message };

  revalidatePath("/admin/users");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Bureau management
// ---------------------------------------------------------------------------

export async function createBureau(
  name: string
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase.from("bureaus").insert({ name });

  if (error) return { error: error.message };

  revalidatePath("/admin/bureaus");
  return { ok: true };
}

export async function assignSupervisor(
  bureauId: string,
  userId: string | null
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("bureaus")
    .update({ supervisor_user_id: userId })
    .eq("id", bureauId);

  if (error) return { error: error.message };

  revalidatePath("/admin/bureaus");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Track management (optional but useful)
// ---------------------------------------------------------------------------

export async function createTrack({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description?: string | null;
}): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();

  // order_index = current max + 1
  const { data: maxRow } = await supabase
    .from("tracks")
    .select("order_index")
    .order("order_index", { ascending: false })
    .limit(1)
    .single();
  const order_index = ((maxRow as { order_index: number } | null)?.order_index ?? -1) + 1;

  const { error } = await supabase
    .from("tracks")
    .insert({ id, name, description: description ?? null, order_index });

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Module management
// ---------------------------------------------------------------------------

export async function createModule({
  trackId,
  title,
  description,
}: {
  trackId: string;
  title: string;
  description?: string | null;
}): Promise<{ ok?: true; id?: string; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();

  const { data: maxRow } = await supabase
    .from("modules")
    .select("order_index")
    .eq("track_id", trackId)
    .order("order_index", { ascending: false })
    .limit(1)
    .single();
  const order_index =
    ((maxRow as { order_index: number } | null)?.order_index ?? -1) + 1;

  const { data, error } = await supabase
    .from("modules")
    .insert({ track_id: trackId, title, description: description ?? null, order_index })
    .select("id")
    .single();

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true, id: (data as { id: string }).id };
}

export async function updateModule(
  moduleId: string,
  updates: { title?: string; description?: string | null }
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("modules")
    .update(updates)
    .eq("id", moduleId);

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true };
}

export async function deleteModule(
  moduleId: string
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("modules")
    .delete()
    .eq("id", moduleId);

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true };
}

export async function reorderModules(
  trackId: string,
  orderedIds: string[]
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();

  // Update each module's order_index to match its position in orderedIds.
  for (let i = 0; i < orderedIds.length; i++) {
    const { error } = await supabase
      .from("modules")
      .update({ order_index: i })
      .eq("id", orderedIds[i])
      .eq("track_id", trackId);
    if (error) return { error: error.message };
  }

  revalidatePath("/admin/content");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Lesson management
// ---------------------------------------------------------------------------

export async function createLesson({
  moduleId,
  title,
}: {
  moduleId: string;
  title: string;
}): Promise<{ ok?: true; id?: string; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();

  const { data: maxRow } = await supabase
    .from("lessons")
    .select("order_index")
    .eq("module_id", moduleId)
    .order("order_index", { ascending: false })
    .limit(1)
    .single();
  const order_index =
    ((maxRow as { order_index: number } | null)?.order_index ?? -1) + 1;

  const { data, error } = await supabase
    .from("lessons")
    .insert({ module_id: moduleId, title, body: "", order_index })
    .select("id")
    .single();

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true, id: (data as { id: string }).id };
}

export async function updateLesson(
  lessonId: string,
  updates: {
    title?: string;
    body?: string;
    video_url?: string | null;
    image_urls?: string[] | null;
    tags?: string[] | null;
  }
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("lessons")
    .update(updates)
    .eq("id", lessonId);

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  revalidatePath(`/admin/content/lesson/${lessonId}`);
  return { ok: true };
}

export async function deleteLesson(
  lessonId: string
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("lessons")
    .delete()
    .eq("id", lessonId);

  if (error) return { error: error.message };

  revalidatePath("/admin/content");
  return { ok: true };
}

export async function reorderLessons(
  moduleId: string,
  orderedIds: string[]
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();

  for (let i = 0; i < orderedIds.length; i++) {
    const { error } = await supabase
      .from("lessons")
      .update({ order_index: i })
      .eq("id", orderedIds[i])
      .eq("module_id", moduleId);
    if (error) return { error: error.message };
  }

  revalidatePath("/admin/content");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Quiz management
// ---------------------------------------------------------------------------

export async function saveQuiz(
  lessonId: string,
  {
    questions,
    pass_threshold,
  }: { questions: QuizQuestion[]; pass_threshold: number }
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase.from("quizzes").upsert(
    { lesson_id: lessonId, questions, pass_threshold },
    { onConflict: "lesson_id" }
  );

  if (error) return { error: error.message };

  revalidatePath(`/admin/content/lesson/${lessonId}`);
  return { ok: true };
}

export async function deleteQuiz(
  lessonId: string
): Promise<{ ok?: true; error?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const supabase = createClient();
  const { error } = await supabase
    .from("quizzes")
    .delete()
    .eq("lesson_id", lessonId);

  if (error) return { error: error.message };

  revalidatePath(`/admin/content/lesson/${lessonId}`);
  return { ok: true };
}
