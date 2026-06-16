"use client";

import { useState } from "react";
import type { QuizQuestion, QuizRow } from "@/lib/types";
import { saveQuiz, deleteQuiz } from "@/app/admin/actions";

interface Props {
  lessonId: string;
  initialQuiz: QuizRow | null;
}

function emptyQuestion(): QuizQuestion {
  return {
    q: "",
    choices: ["", ""],
    correct_index: 0,
    explanation: "",
  };
}

export function QuizBuilder({ lessonId, initialQuiz }: Props) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(
    initialQuiz?.questions ?? []
  );
  const [passThreshold, setPassThreshold] = useState(
    initialQuiz?.pass_threshold ?? 70
  );
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  // ---- Question mutations ----
  function addQuestion() {
    setQuestions((prev) => [...prev, emptyQuestion()]);
  }

  function removeQuestion(idx: number) {
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateQuestion(
    qIdx: number,
    field: keyof Omit<QuizQuestion, "choices" | "correct_index">,
    value: string
  ) {
    setQuestions((prev) =>
      prev.map((q, i) => (i === qIdx ? { ...q, [field]: value } : q))
    );
  }

  function addChoice(qIdx: number) {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIdx ? { ...q, choices: [...q.choices, ""] } : q
      )
    );
  }

  function removeChoice(qIdx: number, cIdx: number) {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIdx) return q;
        const choices = q.choices.filter((_, ci) => ci !== cIdx);
        const correct_index =
          q.correct_index >= cIdx && q.correct_index > 0
            ? q.correct_index - 1
            : q.correct_index;
        return { ...q, choices, correct_index };
      })
    );
  }

  function updateChoice(qIdx: number, cIdx: number, value: string) {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIdx) return q;
        const choices = q.choices.map((c, ci) => (ci === cIdx ? value : c));
        return { ...q, choices };
      })
    );
  }

  function setCorrect(qIdx: number, cIdx: number) {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIdx ? { ...q, correct_index: cIdx } : q
      )
    );
  }

  // ---- Save / delete ----
  async function handleSave() {
    setSaving(true);
    setError(null);
    setSaved(false);

    const res = await saveQuiz(lessonId, {
      questions,
      pass_threshold: passThreshold,
    });
    setSaving(false);

    if (res.error) {
      setError(res.error);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  }

  async function handleDelete() {
    if (!confirm("Remove the quiz from this lesson?")) return;
    setDeleting(true);
    setError(null);

    const res = await deleteQuiz(lessonId);
    setDeleting(false);

    if (res.error) {
      setError(res.error);
    } else {
      setQuestions([]);
      setPassThreshold(70);
      setSaved(false);
    }
  }

  return (
    <div className="space-y-6">
      {questions.length === 0 && (
        <p className="text-sm text-navy-400">
          No quiz yet. Add a question to create one.
        </p>
      )}

      {questions.map((q, qIdx) => (
        <div
          key={qIdx}
          className="rounded-xl border border-surface-200 bg-surface-50 p-4 space-y-3"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
              Question {qIdx + 1}
            </p>
            <button
              type="button"
              onClick={() => removeQuestion(qIdx)}
              className="btn-danger py-1 px-2 text-xs"
            >
              Remove
            </button>
          </div>

          {/* Question text */}
          <div>
            <label className="label text-xs">Question</label>
            <input
              type="text"
              value={q.q}
              onChange={(e) => updateQuestion(qIdx, "q", e.target.value)}
              placeholder="What does ERO stand for?"
              className="input text-sm"
            />
          </div>

          {/* Choices */}
          <div className="space-y-2">
            <label className="label text-xs">Answer Choices</label>
            {q.choices.map((choice, cIdx) => (
              <div key={cIdx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`correct-${qIdx}`}
                  checked={q.correct_index === cIdx}
                  onChange={() => setCorrect(qIdx, cIdx)}
                  className="shrink-0 accent-brand-600"
                  aria-label={`Mark choice ${cIdx + 1} as correct`}
                />
                <input
                  type="text"
                  value={choice}
                  onChange={(e) => updateChoice(qIdx, cIdx, e.target.value)}
                  placeholder={`Choice ${cIdx + 1}`}
                  className="input flex-1 text-sm"
                />
                {q.choices.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeChoice(qIdx, cIdx)}
                    className="shrink-0 text-xs text-status-red hover:text-red-700"
                    aria-label="Remove choice"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addChoice(qIdx)}
              className="btn-ghost py-1 text-xs"
            >
              + Add Choice
            </button>
            <p className="text-xs text-navy-400">
              Select the radio button next to the correct answer.
            </p>
          </div>

          {/* Explanation */}
          <div>
            <label className="label text-xs">Explanation (shown after submit)</label>
            <input
              type="text"
              value={q.explanation ?? ""}
              onChange={(e) => updateQuestion(qIdx, "explanation", e.target.value)}
              placeholder="Optional — e.g. ERO stands for Electronic Return Originator."
              className="input text-sm"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={addQuestion}
          className="btn-ghost text-sm"
        >
          + Add Question
        </button>

        {questions.length > 0 && (
          <div className="flex items-center gap-2">
            <label className="label mb-0 text-sm whitespace-nowrap">
              Pass threshold
            </label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                min={0}
                max={100}
                value={passThreshold}
                onChange={(e) => setPassThreshold(Number(e.target.value))}
                className="input w-20 text-sm"
              />
              <span className="text-sm text-navy-500">%</span>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="rounded-lg border border-status-red/20 bg-red-50 px-4 py-2.5 text-sm text-status-red">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {questions.length > 0 && (
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="btn-primary text-sm"
          >
            {saving ? "Saving…" : "Save Quiz"}
          </button>
        )}

        {initialQuiz && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="btn-danger text-sm"
          >
            {deleting ? "Removing…" : "Remove Quiz"}
          </button>
        )}

        {saved && (
          <p className="text-sm font-medium text-status-green">Quiz saved!</p>
        )}
      </div>
    </div>
  );
}
