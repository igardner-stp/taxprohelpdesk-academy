import Link from "next/link";
import { CheckCircle } from "@/components/icons";
import type { ModuleWithLessons } from "@/lib/data/content";

// Sidebar module/lesson nav scoped to the current track, with completion checks.
export function LessonNav({
  trackId,
  outline,
  completed,
  currentLessonId,
}: {
  trackId: string;
  outline: ModuleWithLessons[];
  completed: Set<string>;
  currentLessonId: string;
}) {
  return (
    <nav className="space-y-5">
      {outline.map((module, mi) => (
        <div key={module.id}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-500">
            {mi + 1}. {module.title}
          </p>
          <ul className="space-y-0.5">
            {module.lessons.map((lesson) => {
              const isDone = completed.has(lesson.id);
              const isCurrent = lesson.id === currentLessonId;
              return (
                <li key={lesson.id}>
                  <Link
                    href={`/learn/${trackId}/${module.id}/${lesson.id}`}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-sm transition ${
                      isCurrent
                        ? "bg-brand-50 font-medium text-brand-700"
                        : "text-navy-600 hover:bg-surface-100"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-status-green" />
                    ) : (
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-surface-300" />
                    )}
                    <span>{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
