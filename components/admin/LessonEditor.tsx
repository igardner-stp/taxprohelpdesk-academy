"use client";

import { useState } from "react";
import type { LessonRow, QuizRow } from "@/lib/types";
import { LessonMarkdown } from "@/components/LessonMarkdown";
import { updateLesson } from "@/app/admin/actions";
import { QuizBuilder } from "./QuizBuilder";

interface Props {
  lesson: LessonRow;
  initialQuiz: QuizRow | null;
}

export function LessonEditor({ lesson, initialQuiz }: Props) {
  const [title, setTitle] = useState(lesson.title);
  const [body, setBody] = useState(lesson.body ?? "");
  const [videoUrl, setVideoUrl] = useState(lesson.video_url ?? "");
  const [imageUrlsRaw, setImageUrlsRaw] = useState(
    (lesson.image_urls ?? []).join("\n")
  );
  const [tagsRaw, setTagsRaw] = useState(
    (lesson.tags ?? []).join(", ")
  );

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaveError(null);
    setSaved(false);

    const image_urls = imageUrlsRaw
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean);
    const tags = tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const res = await updateLesson(lesson.id, {
      title: title.trim(),
      body,
      video_url: videoUrl.trim() || null,
      image_urls: image_urls.length > 0 ? image_urls : null,
      tags: tags.length > 0 ? tags : null,
    });

    setSaving(false);
    if (res.error) {
      setSaveError(res.error);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  }

  return (
    <div className="space-y-8">
      {/* Lesson fields */}
      <form onSubmit={handleSave} className="space-y-6 panel p-6">
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor="lesson_title" className="label">
              Title
            </label>
            <input
              id="lesson_title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
            />
          </div>

          {/* Body + preview toggle */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="lesson_body" className="label mb-0">
                Body (Markdown)
              </label>
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="text-xs font-medium text-brand-600 hover:text-brand-700"
              >
                {showPreview ? "Hide preview" : "Show preview"}
              </button>
            </div>

            <div className={`gap-4 ${showPreview ? "grid grid-cols-1 lg:grid-cols-2" : "block"}`}>
              <textarea
                id="lesson_body"
                rows={16}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="input font-mono text-sm"
                placeholder="Write the lesson in Markdown…"
              />
              {showPreview && (
                <div className="panel max-h-[500px] overflow-y-auto p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-400">
                    Preview
                  </p>
                  <LessonMarkdown body={body} />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="video_url" className="label">
                Video URL (optional)
              </label>
              <input
                id="video_url"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://…"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="tags_raw" className="label">
                Tags (comma-separated)
              </label>
              <input
                id="tags_raw"
                type="text"
                value={tagsRaw}
                onChange={(e) => setTagsRaw(e.target.value)}
                placeholder="ero, efile, compliance"
                className="input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="image_urls" className="label">
              Image URLs (one per line)
            </label>
            <textarea
              id="image_urls"
              rows={3}
              value={imageUrlsRaw}
              onChange={(e) => setImageUrlsRaw(e.target.value)}
              placeholder="https://…&#10;https://…"
              className="input font-mono text-sm"
            />
          </div>
        </div>

        {saveError && (
          <p className="rounded-lg border border-status-red/20 bg-red-50 px-4 py-2.5 text-sm text-status-red">
            {saveError}
          </p>
        )}

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving} className="btn-primary">
            {saving ? "Saving…" : "Save Lesson"}
          </button>
          {saved && (
            <p className="text-sm font-medium text-status-green">Saved!</p>
          )}
        </div>
      </form>

      {/* Quiz builder */}
      <div className="panel p-6">
        <h2 className="mb-4 text-base font-semibold text-navy-800">
          Quiz
        </h2>
        <QuizBuilder lessonId={lesson.id} initialQuiz={initialQuiz} />
      </div>
    </div>
  );
}
