"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LessonMarkdown } from "@/components/LessonMarkdown";
import { InteractiveLessonPlayer } from "@/components/learn/InteractiveLessonPlayer";
import { CheckCircle, XCircle, ChevronLeft, ChevronRight } from "@/components/icons";
import { markLessonComplete, submitQuiz } from "@/app/learn/actions";
import type { LessonRow, SanitizedQuiz, QuizGradeResult } from "@/lib/types";

// Turns a video URL into an embeddable src (YouTube/Vimeo → embed; else as-is).
function toEmbed(url: string): string {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
}

export function LessonPlayer({
  lesson,
  quiz,
  trackId,
  initialCompleted,
  prevHref,
  nextHref,
  trackHref,
}: {
  lesson: Pick<
    LessonRow,
    "id" | "title" | "body" | "video_url" | "image_urls" | "media_manifest"
  >;
  quiz: SanitizedQuiz | null;
  trackId: string;
  initialCompleted: boolean;
  prevHref: string | null;
  nextHref: string | null;
  trackHref: string;
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [certIssued, setCertIssued] = useState(false);

  // Quiz state
  const [answers, setAnswers] = useState<number[]>(() =>
    quiz ? new Array(quiz.questions.length).fill(-1) : []
  );
  const [result, setResult] = useState<QuizGradeResult | null>(null);

  async function onMarkComplete() {
    setBusy(true);
    setError(null);
    const res = await markLessonComplete(lesson.id, trackId);
    setBusy(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    setCompleted(true);
    if (res.certificateIssued) setCertIssued(true);
    router.refresh();
  }

  async function onSubmitQuiz() {
    if (!quiz) return;
    if (answers.some((a) => a < 0)) {
      setError("Please answer every question before submitting.");
      return;
    }
    setBusy(true);
    setError(null);
    const res = await submitQuiz(lesson.id, trackId, answers);
    setBusy(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    setResult(res);
    if (res.passed) {
      setCompleted(true);
      router.refresh();
    }
  }

  function resetQuiz() {
    setResult(null);
    setAnswers(new Array(quiz!.questions.length).fill(-1));
  }

  const videoSrc = lesson.video_url ? toEmbed(lesson.video_url) : null;
  const manifest = lesson.media_manifest ?? null;

  // When the narrated player reaches the end, auto-complete lessons that have
  // no quiz (quiz lessons still require a passing submission).
  async function onInteractiveFinished() {
    if (!quiz && !completed) await onMarkComplete();
  }

  return (
    <div className="pb-28">
      <article>
        <h1 className="text-2xl sm:text-3xl">{lesson.title}</h1>
        {completed && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-status-green">
            <CheckCircle className="h-4 w-4" /> Completed
          </p>
        )}

        {manifest ? (
          <>
            <div className="mt-5">
              <InteractiveLessonPlayer
                manifest={manifest}
                onFinished={onInteractiveFinished}
              />
            </div>
            <details className="panel mt-5 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-navy-800">
                Read the lesson notes
              </summary>
              <div className="mt-3">
                <LessonMarkdown body={lesson.body} />
              </div>
            </details>
          </>
        ) : (
          <>
            {videoSrc && (
              <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl border border-surface-200">
                <iframe
                  src={videoSrc}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            )}

            <div className="mt-5">
              <LessonMarkdown body={lesson.body} />
            </div>

            {lesson.image_urls && lesson.image_urls.length > 0 && (
              <div className="mt-5 space-y-4">
                {lesson.image_urls.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`${lesson.title} — figure ${i + 1}`}
                    className="w-full rounded-lg border border-surface-200"
                  />
                ))}
              </div>
            )}
          </>
        )}
      </article>

      {/* Quiz */}
      {quiz && (
        <section className="panel mt-8 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Knowledge check</h2>
            <span className="text-xs font-medium text-navy-500">
              Pass: {quiz.pass_threshold}%
            </span>
          </div>
          <p className="mt-1 text-sm text-navy-500">
            Answer every question and submit to complete this lesson.
          </p>

          <ol className="mt-5 space-y-6">
            {quiz.questions.map((question, qi) => {
              const fb = result?.feedback?.[qi];
              return (
                <li key={qi}>
                  <p className="font-medium text-navy-900">
                    {qi + 1}. {question.q}
                  </p>
                  <div className="mt-3 space-y-2">
                    {question.choices.map((choice, ci) => {
                      const selected = answers[qi] === ci;
                      const showCorrect = fb && ci === fb.correct_index;
                      const showWrong = fb && selected && !fb.correct;
                      return (
                        <label
                          key={ci}
                          className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm transition ${
                            showCorrect
                              ? "border-status-green bg-green-50"
                              : showWrong
                                ? "border-status-red bg-red-50"
                                : selected
                                  ? "border-brand-600 bg-brand-50"
                                  : "border-surface-200 hover:bg-surface-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q-${qi}`}
                            className="mt-0.5"
                            checked={selected}
                            disabled={!!result}
                            onChange={() => {
                              const copy = [...answers];
                              copy[qi] = ci;
                              setAnswers(copy);
                              setError(null);
                            }}
                          />
                          <span className="text-navy-800">{choice}</span>
                          {showCorrect && (
                            <CheckCircle className="ml-auto h-4 w-4 shrink-0 text-status-green" />
                          )}
                          {showWrong && (
                            <XCircle className="ml-auto h-4 w-4 shrink-0 text-status-red" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                  {fb?.explanation && (
                    <p className="mt-2 rounded-lg bg-surface-50 px-3 py-2 text-sm text-navy-600">
                      {fb.explanation}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          {result && (
            <div
              className={`mt-6 rounded-lg p-4 text-sm ${
                result.passed
                  ? "bg-green-50 text-status-green"
                  : "bg-amber-50 text-status-amber"
              }`}
            >
              {result.passed
                ? `Passed — you scored ${result.score}%. Lesson complete!`
                : `You scored ${result.score}%. You need ${result.passThreshold}% to pass — review the answers above and try again.`}
            </div>
          )}

          {error && <p className="mt-4 text-sm text-status-red">{error}</p>}

          <div className="mt-5 flex gap-3">
            {!result ? (
              <button onClick={onSubmitQuiz} disabled={busy} className="btn-primary">
                {busy ? "Submitting…" : "Submit answers"}
              </button>
            ) : !result.passed ? (
              <button onClick={resetQuiz} className="btn-primary">
                Try again
              </button>
            ) : null}
          </div>
        </section>
      )}

      {certIssued && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-status-green">
          🎉 You finished the track! Your certificate is ready —{" "}
          <Link href={`/learn/${trackId}/certificate`} className="font-semibold underline">
            view it here
          </Link>
          .
        </div>
      )}

      {/* Sticky footer: Prev / action / Next */}
      <div className="no-print fixed inset-x-0 bottom-0 z-20 border-t border-surface-200 bg-white/95 backdrop-blur">
        <div className="layout-px mx-auto flex max-w-6xl items-center justify-between gap-3 py-3">
          {prevHref ? (
            <Link href={prevHref} className="btn-ghost">
              <ChevronLeft className="h-4 w-4" /> Prev
            </Link>
          ) : (
            <Link href={trackHref} className="btn-ghost">
              <ChevronLeft className="h-4 w-4" /> Overview
            </Link>
          )}

          {!quiz && !completed && (
            <button onClick={onMarkComplete} disabled={busy} className="btn-primary">
              {busy ? "Saving…" : "Mark complete"}
            </button>
          )}
          {!quiz && completed && (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-status-green">
              <CheckCircle className="h-4 w-4" /> Completed
            </span>
          )}
          {quiz && (
            <span className="hidden text-sm font-medium text-navy-500 sm:inline">
              {completed ? "Lesson complete" : "Pass the quiz to complete"}
            </span>
          )}

          {nextHref ? (
            <Link href={nextHref} className="btn-navy">
              Next <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link href={trackHref} className="btn-navy">
              Finish <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
