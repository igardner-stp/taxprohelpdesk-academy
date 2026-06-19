"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { getSessionUser } from "@/lib/auth";
import type { TenantRow } from "@/lib/types";

async function requireAdmin(): Promise<
  { ok: true } | { ok: false; error: string }
> {
  const s = await getSessionUser();
  if (s?.profile?.role !== "admin") {
    return { ok: false, error: "Not authorized." };
  }
  return { ok: true };
}

export async function createTenant(
  name: string,
  slug: string
): Promise<{ error?: string; tenant?: TenantRow }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("tenants")
    .insert({ name, slug })
    .select()
    .single();

  if (error) {
    if (error.code === "23505") {
      return { error: "That subdomain is already taken." };
    }
    return { error: error.message };
  }

  revalidatePath("/admin/tenants");
  return { tenant: data as TenantRow };
}

export async function uploadTenantLogo(
  formData: FormData
): Promise<{ error?: string; logoUrl?: string }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const tenantId = formData.get("tenantId") as string;
  const file = formData.get("file") as File;

  if (!tenantId || !file || file.size === 0) return { error: "Missing data." };
  if (file.size > 2 * 1024 * 1024) return { error: "Logo must be under 2 MB." };

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "png";
  const path = `${tenantId}/logo.${ext}`;

  const admin = createAdminClient();

  const fileBuffer = await file.arrayBuffer();
  const { error: uploadError } = await admin.storage
    .from("tenant-logos")
    .upload(path, fileBuffer, { upsert: true, contentType: file.type });

  if (uploadError) return { error: uploadError.message };

  // Bust the CDN cache by appending a version param.
  const { data: urlData } = admin.storage
    .from("tenant-logos")
    .getPublicUrl(path);
  const logoUrl = `${urlData.publicUrl}?v=${Date.now()}`;

  const { error: dbError } = await admin
    .from("tenants")
    .update({ logo_url: logoUrl })
    .eq("id", tenantId);

  if (dbError) return { error: dbError.message };

  revalidatePath("/admin/tenants");
  return { logoUrl };
}

export async function deleteTenant(
  id: string
): Promise<{ error?: string; ok?: true }> {
  const guard = await requireAdmin();
  if (!guard.ok) return { error: guard.error };

  const admin = createAdminClient();
  const { error } = await admin.from("tenants").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/tenants");
  return { ok: true };
}
