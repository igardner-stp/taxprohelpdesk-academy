"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { TrackRow } from "@/lib/types";
import type { ModuleWithLessons } from "@/lib/data/content";
import {
  createModule,
  updateModule,
  deleteModule,
  reorderModules,
  createLesson,
  deleteLesson,
  reorderLessons,
} from "@/app/admin/actions";

interface TrackData {
  track: TrackRow;
  modules: ModuleWithLessons[];
}

interface Props {
  trackData: TrackData[];
}

// ---------------------------------------------------------------------------
// Module list for one track
// ---------------------------------------------------------------------------

function ModuleList({
  track,
  initialModules,
}: {
  track: TrackRow;
  initialModules: ModuleWithLessons[];
}) {
  const [modules, setModules] = useState(initialModules);
  const [search, setSearch] = useState("");

  // Module create form state
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleDesc, setNewModuleDesc] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Edit module state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  // Lesson add state (per module)
  const [addingLessonFor, setAddingLessonFor] = useState<string | null>(null);
  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [lessonCreating, setLessonCreating] = useState(false);
  const [lessonError, setLessonError] = useState<string | null>(null);

  // Reorder/delete loading states
  const [actionLoading, setActionLoading] = useState<Record<string, boolean>>({});
  const [actionError, setActionError] = useState<Record<string, string>>({});

  // Filter lessons by search across all modules.
  const filteredModules = useMemo(() => {
    if (!search.trim()) return modules;
    const q = search.toLowerCase();
    return modules
      .map((m) => ({
        ...m,
        lessons: m.lessons.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            (l.tags ?? []).some((t) => t.toLowerCase().includes(q))
        ),
      }))
      .filter((m) => m.lessons.length > 0 || m.title.toLowerCase().includes(q));
  }, [modules, search]);

  async function handleCreateModule(e: React.FormEvent) {
    e.preventDefault();
    const title = newModuleTitle.trim();
    if (!title) return;
    setCreating(true);
    setCreateError(null);

    const res = await createModule({
      trackId: track.id,
      title,
      description: newModuleDesc.trim() || null,
    });
    setCreating(false);

    if (res.error) {
      setCreateError(res.error);
    } else {
      setNewModuleTitle("");
      setNewModuleDesc("");
      const newMod: ModuleWithLessons = {
        id: res.id!,
        track_id: track.id,
        title,
        description: newModuleDesc.trim() || null,
        order_index: modules.length,
        created_at: new Date().toISOString(),
        lessons: [],
      };
      setModules((prev) => [...prev, newMod]);
    }
  }

  async function handleDeleteModule(moduleId: string) {
    if (!confirm("Delete this module and all its lessons?")) return;
    setActionLoading((p) => ({ ...p, [moduleId]: true }));
    const res = await deleteModule(moduleId);
    setActionLoading((p) => ({ ...p, [moduleId]: false }));
    if (res.error) {
      setActionError((p) => ({ ...p, [moduleId]: res.error! }));
    } else {
      setModules((prev) => prev.filter((m) => m.id !== moduleId));
    }
  }

  async function handleReorderModule(moduleId: string, dir: "up" | "down") {
    const idx = modules.findIndex((m) => m.id === moduleId);
    if (idx < 0) return;
    const newIdx = dir === "up" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= modules.length) return;

    const reordered = [...modules];
    [reordered[idx], reordered[newIdx]] = [reordered[newIdx], reordered[idx]];
    setModules(reordered);

    const res = await reorderModules(
      track.id,
      reordered.map((m) => m.id)
    );
    if (res.error) {
      setActionError((p) => ({ ...p, [moduleId]: res.error! }));
    }
  }

  function startEdit(mod: ModuleWithLessons) {
    setEditingId(mod.id);
    setEditTitle(mod.title);
    setEditDesc(mod.description ?? "");
    setEditError(null);
  }

  async function saveEdit(moduleId: string) {
    setEditLoading(true);
    setEditError(null);
    const res = await updateModule(moduleId, {
      title: editTitle.trim(),
      description: editDesc.trim() || null,
    });
    setEditLoading(false);
    if (res.error) {
      setEditError(res.error);
    } else {
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId
            ? { ...m, title: editTitle.trim(), description: editDesc.trim() || null }
            : m
        )
      );
      setEditingId(null);
    }
  }

  async function handleCreateLesson(moduleId: string) {
    const title = newLessonTitle.trim();
    if (!title) return;
    setLessonCreating(true);
    setLessonError(null);

    const res = await createLesson({ moduleId, title });
    setLessonCreating(false);

    if (res.error) {
      setLessonError(res.error);
    } else {
      setNewLessonTitle("");
      setAddingLessonFor(null);
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId
            ? {
                ...m,
                lessons: [
                  ...m.lessons,
                  { id: res.id!, title, order_index: m.lessons.length, tags: null },
                ],
              }
            : m
        )
      );
    }
  }

  async function handleDeleteLesson(moduleId: string, lessonId: string) {
    if (!confirm("Delete this lesson?")) return;
    setActionLoading((p) => ({ ...p, [lessonId]: true }));
    const res = await deleteLesson(lessonId);
    setActionLoading((p) => ({ ...p, [lessonId]: false }));
    if (res.error) {
      setActionError((p) => ({ ...p, [lessonId]: res.error! }));
    } else {
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId
            ? { ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) }
            : m
        )
      );
    }
  }

  async function handleReorderLesson(
    moduleId: string,
    lessonId: string,
    dir: "up" | "down"
  ) {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) return;
    const idx = mod.lessons.findIndex((l) => l.id === lessonId);
    const newIdx = dir === "up" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= mod.lessons.length) return;

    const reordered = [...mod.lessons];
    [reordered[idx], reordered[newIdx]] = [reordered[newIdx], reordered[idx]];

    setModules((prev) =>
      prev.map((m) => (m.id === moduleId ? { ...m, lessons: reordered } : m))
    );

    const res = await reorderLessons(
      moduleId,
      reordered.map((l) => l.id)
    );
    if (res.error) {
      setActionError((p) => ({ ...p, [lessonId]: res.error! }));
    }
  }

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="max-w-sm">
        <input
          type="search"
          placeholder="Search lessons by title or tag…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
      </div>

      {/* Module list */}
      {filteredModules.length === 0 && (
        <p className="py-4 text-sm text-navy-400">No modules found.</p>
      )}

      {filteredModules.map((mod, modIdx) => (
        <div key={mod.id} className="panel">
          {/* Module header */}
          <div className="flex flex-wrap items-start gap-3 border-b border-surface-200 px-5 py-4">
            {editingId === mod.id ? (
              <div className="flex-1 space-y-2">
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="input"
                  placeholder="Module title"
                />
                <input
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="input text-sm"
                  placeholder="Description (optional)"
                />
                {editError && (
                  <p className="text-xs text-status-red">{editError}</p>
                )}
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={editLoading}
                    onClick={() => saveEdit(mod.id)}
                    className="btn-primary py-1.5 text-sm"
                  >
                    {editLoading ? "Saving…" : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="btn-ghost py-1.5 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-navy-900">
                  <span className="mr-2 text-xs text-navy-400">
                    {modIdx + 1}.
                  </span>
                  {mod.title}
                </p>
                {mod.description && (
                  <p className="mt-0.5 text-sm text-navy-500">
                    {mod.description}
                  </p>
                )}
                <p className="mt-1 text-xs text-navy-400">
                  {mod.lessons.length} lesson{mod.lessons.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}

            {editingId !== mod.id && (
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  type="button"
                  disabled={modIdx === 0}
                  onClick={() => handleReorderModule(mod.id, "up")}
                  className="btn-ghost px-2 py-1.5 text-xs disabled:opacity-30"
                  aria-label="Move module up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  disabled={modIdx === filteredModules.length - 1}
                  onClick={() => handleReorderModule(mod.id, "down")}
                  className="btn-ghost px-2 py-1.5 text-xs disabled:opacity-30"
                  aria-label="Move module down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => startEdit(mod)}
                  className="btn-ghost py-1.5 text-xs"
                >
                  Edit
                </button>
                <button
                  type="button"
                  disabled={actionLoading[mod.id]}
                  onClick={() => handleDeleteModule(mod.id)}
                  className="btn-danger py-1.5 text-xs"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Lessons */}
          <ul className="divide-y divide-surface-100">
            {mod.lessons.map((lesson, lessonIdx) => (
              <li
                key={lesson.id}
                className="flex flex-wrap items-center gap-2 px-5 py-3"
              >
                <span className="mr-1 text-xs text-navy-400 w-5 shrink-0">
                  {lessonIdx + 1}.
                </span>
                <span className="flex-1 min-w-0 truncate text-sm text-navy-800">
                  {lesson.title}
                </span>
                <div className="flex items-center gap-1 flex-wrap">
                  <button
                    type="button"
                    disabled={lessonIdx === 0}
                    onClick={() => handleReorderLesson(mod.id, lesson.id, "up")}
                    className="btn-ghost px-2 py-1 text-xs disabled:opacity-30"
                    aria-label="Move lesson up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={lessonIdx === mod.lessons.length - 1}
                    onClick={() =>
                      handleReorderLesson(mod.id, lesson.id, "down")
                    }
                    className="btn-ghost px-2 py-1 text-xs disabled:opacity-30"
                    aria-label="Move lesson down"
                  >
                    ↓
                  </button>
                  <Link
                    href={`/admin/content/lesson/${lesson.id}`}
                    className="btn-ghost py-1 text-xs"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    disabled={actionLoading[lesson.id]}
                    onClick={() => handleDeleteLesson(mod.id, lesson.id)}
                    className="btn-danger py-1 text-xs"
                  >
                    Delete
                  </button>
                </div>
                {actionError[lesson.id] && (
                  <p className="w-full text-xs text-status-red">
                    {actionError[lesson.id]}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* Add lesson */}
          <div className="border-t border-surface-100 px-5 py-3">
            {addingLessonFor === mod.id ? (
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={newLessonTitle}
                  onChange={(e) => setNewLessonTitle(e.target.value)}
                  placeholder="Lesson title"
                  className="input flex-1 text-sm"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleCreateLesson(mod.id);
                    }
                  }}
                />
                <button
                  type="button"
                  disabled={lessonCreating}
                  onClick={() => handleCreateLesson(mod.id)}
                  className="btn-primary py-1.5 text-sm"
                >
                  {lessonCreating ? "Adding…" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAddingLessonFor(null);
                    setNewLessonTitle("");
                    setLessonError(null);
                  }}
                  className="btn-ghost py-1.5 text-sm"
                >
                  Cancel
                </button>
                {lessonError && (
                  <p className="w-full text-xs text-status-red">{lessonError}</p>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setAddingLessonFor(mod.id);
                  setNewLessonTitle("");
                }}
                className="btn-ghost py-1.5 text-xs"
              >
                + Add Lesson
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Create module form */}
      <div className="panel p-5">
        <h3 className="mb-3 text-sm font-semibold text-navy-700">
          Add Module to {track.name}
        </h3>
        <form onSubmit={handleCreateModule} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="label text-xs">Title</label>
              <input
                type="text"
                required
                value={newModuleTitle}
                onChange={(e) => setNewModuleTitle(e.target.value)}
                placeholder="Module title"
                className="input"
              />
            </div>
            <div>
              <label className="label text-xs">Description (optional)</label>
              <input
                type="text"
                value={newModuleDesc}
                onChange={(e) => setNewModuleDesc(e.target.value)}
                placeholder="Brief description"
                className="input"
              />
            </div>
          </div>
          {createError && (
            <p className="text-sm text-status-red">{createError}</p>
          )}
          <button type="submit" disabled={creating} className="btn-primary text-sm">
            {creating ? "Creating…" : "Add Module"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export: tab/accordion per track
// ---------------------------------------------------------------------------

export function ContentManager({ trackData }: Props) {
  const [activeTrack, setActiveTrack] = useState(
    trackData[0]?.track.id ?? null
  );

  if (trackData.length === 0) {
    return (
      <div className="panel p-8 text-center">
        <p className="text-navy-500">
          No tracks found. Add tracks to the database to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Track switcher */}
      {trackData.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {trackData.map(({ track }) => (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveTrack(track.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTrack === track.id
                  ? "bg-navy-800 text-white"
                  : "border border-surface-200 bg-white text-navy-700 hover:bg-surface-100"
              }`}
            >
              {track.name}
            </button>
          ))}
        </div>
      )}

      {trackData.map(({ track, modules }) =>
        activeTrack === track.id || trackData.length === 1 ? (
          <div key={track.id}>
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-navy-900">
                {track.name}
              </h2>
              {track.description && (
                <p className="text-sm text-navy-500">{track.description}</p>
              )}
            </div>
            <ModuleList track={track} initialModules={modules} />
          </div>
        ) : null
      )}
    </div>
  );
}
