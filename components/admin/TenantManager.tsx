"use client";

import { useState } from "react";
import type { TenantRow } from "@/lib/types";
import {
  createTenant,
  uploadTenantLogo,
  deleteTenant,
} from "@/app/admin/tenants/actions";

const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN ?? "taxprotraining.com";

function slugify(v: string) {
  return v
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function TenantManager({ tenants: initial }: { tenants: TenantRow[] }) {
  const [tenants, setTenants] = useState(initial);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [uploadErrors, setUploadErrors] = useState<Record<string, string>>({});
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleNameChange(v: string) {
    setName(v);
    setSlug(slugify(v));
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedSlug = slug.trim();
    if (!trimmedName || !trimmedSlug) return;
    setCreating(true);
    setCreateError(null);

    const res = await createTenant(trimmedName, trimmedSlug);
    setCreating(false);

    if (res.error) {
      setCreateError(res.error);
    } else {
      setName("");
      setSlug("");
      setTenants((prev) => [...prev, res.tenant!]);
    }
  }

  async function handleLogoUpload(tenantId: string, file: File) {
    setUploadingId(tenantId);
    setUploadErrors((p) => ({ ...p, [tenantId]: "" }));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tenantId", tenantId);

    const res = await uploadTenantLogo(formData);
    setUploadingId(null);

    if (res.error) {
      setUploadErrors((p) => ({ ...p, [tenantId]: res.error! }));
    } else {
      setTenants((prev) =>
        prev.map((t) =>
          t.id === tenantId ? { ...t, logo_url: res.logoUrl! } : t
        )
      );
    }
  }

  async function handleDelete(tenantId: string, tenantName: string) {
    if (
      !confirm(
        `Delete "${tenantName}"? Their branding will stop working immediately.`
      )
    )
      return;
    setDeletingId(tenantId);
    const res = await deleteTenant(tenantId);
    setDeletingId(null);

    if (!res.error) {
      setTenants((prev) => prev.filter((t) => t.id !== tenantId));
    }
  }

  return (
    <div className="space-y-6">
      {/* ── Create form ── */}
      <div className="panel p-6">
        <h2 className="mb-4 text-base font-semibold text-navy-800">
          Add Tenant
        </h2>
        <form onSubmit={handleCreate} className="flex max-w-lg flex-col gap-4">
          <div>
            <label htmlFor="tenant_name" className="label">
              Company Name
            </label>
            <input
              id="tenant_name"
              type="text"
              required
              placeholder="Acme Tax Services"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="input"
            />
          </div>

          <div>
            <label htmlFor="tenant_slug" className="label">
              Subdomain URL
            </label>
            <div className="flex items-stretch">
              <input
                id="tenant_slug"
                type="text"
                required
                placeholder="acme"
                value={slug}
                onChange={(e) =>
                  setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))
                }
                className="input min-w-0 flex-1 rounded-r-none"
              />
              <span className="inline-flex items-center rounded-r-lg border border-l-0 border-surface-300 bg-surface-50 px-3 text-sm text-navy-500 whitespace-nowrap">
                .{BASE_DOMAIN}
              </span>
            </div>
            <p className="mt-1 text-xs text-navy-400">
              Lowercase letters, numbers, and hyphens only.
            </p>
          </div>

          {createError && (
            <p className="text-sm text-status-red">{createError}</p>
          )}

          <button
            type="submit"
            disabled={creating || !name.trim() || !slug.trim()}
            className="btn-primary self-start"
          >
            {creating ? "Creating…" : "Create Tenant"}
          </button>
        </form>
      </div>

      {/* ── Tenant list ── */}
      <div className="panel overflow-hidden">
        <div className="border-b border-surface-200 px-6 py-4">
          <h2 className="text-base font-semibold text-navy-800">
            All Tenants{" "}
            <span className="ml-1 text-sm font-normal text-navy-500">
              ({tenants.length})
            </span>
          </h2>
        </div>

        {tenants.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-navy-500">
            No tenants yet. Add your first client above.
          </p>
        ) : (
          <ul className="divide-y divide-surface-200">
            {tenants.map((tenant) => (
              <li key={tenant.id} className="px-6 py-5">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Logo preview */}
                  <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded border border-surface-200 bg-surface-50 p-1">
                    {tenant.logo_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tenant.logo_url}
                        alt={tenant.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-xs text-navy-400">No logo</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-navy-900">{tenant.name}</p>
                    <p className="text-sm text-navy-500">
                      {tenant.slug}.{BASE_DOMAIN}
                    </p>
                  </div>

                  {/* Logo upload */}
                  <div className="min-w-[180px] space-y-1">
                    <p className="label text-xs">
                      {tenant.logo_url ? "Replace Logo" : "Upload Logo"}
                    </p>
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml,image/webp"
                      disabled={uploadingId === tenant.id}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleLogoUpload(tenant.id, file);
                        e.target.value = "";
                      }}
                      className="block w-full text-xs text-navy-600 file:mr-2 file:cursor-pointer file:rounded file:border-0 file:bg-surface-100 file:px-2 file:py-1 file:text-xs file:font-medium file:text-navy-700 hover:file:bg-surface-200 disabled:opacity-50"
                    />
                    {uploadingId === tenant.id && (
                      <p className="text-xs text-navy-500">Uploading…</p>
                    )}
                    {uploadErrors[tenant.id] && (
                      <p className="text-xs text-status-red">
                        {uploadErrors[tenant.id]}
                      </p>
                    )}
                    <p className="text-xs text-navy-400">PNG, JPG, SVG · max 2 MB</p>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(tenant.id, tenant.name)}
                    disabled={deletingId === tenant.id}
                    className="shrink-0 text-sm font-medium text-status-red hover:text-red-700 disabled:opacity-50"
                  >
                    {deletingId === tenant.id ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
