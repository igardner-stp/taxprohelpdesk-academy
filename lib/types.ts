// =============================================================================
// Database types — mirror of supabase/schema.sql
// =============================================================================

import type { LessonMediaManifest } from "@/lib/interactive";
export type { LessonMediaManifest } from "@/lib/interactive";

export type Role = "admin" | "bureau_supervisor" | "learner";

// Track ids are text PKs ('ero' | 'bureau' today, extensible later).
export type TrackId = string;

export interface ProfileRow {
  id: string;
  full_name: string | null;
  email: string;
  role: Role;
  bureau_id: string | null;
  created_at: string;
}

export interface BureauRow {
  id: string;
  name: string;
  supervisor_user_id: string | null;
  created_at: string;
}

export interface TrackRow {
  id: TrackId;
  name: string;
  description: string | null;
  order_index: number;
}

export interface UserTrackRow {
  user_id: string;
  track_id: TrackId;
  assigned_at: string;
}

export interface ModuleRow {
  id: string;
  track_id: TrackId;
  title: string;
  description: string | null;
  order_index: number;
  created_at: string;
}

export interface LessonRow {
  id: string;
  module_id: string;
  title: string;
  body: string;
  video_url: string | null;
  image_urls: string[] | null;
  tags: string[] | null;
  order_index: number;
  created_at: string;
  // Interactive narrated experience (code-driven slides + ElevenLabs audio).
  // Null on lessons that haven't been produced yet — those fall back to the
  // markdown/video renderer. See lib/interactive.ts.
  media_manifest: LessonMediaManifest | null;
}

// One question inside quizzes.questions (jsonb array).
export interface QuizQuestion {
  q: string;
  choices: string[];
  correct_index: number;
  explanation?: string;
}

export interface QuizRow {
  id: string;
  lesson_id: string;
  questions: QuizQuestion[];
  pass_threshold: number;
}

// A quiz with the answers stripped — what the client/lesson player receives.
export interface SanitizedQuiz {
  id: string;
  lesson_id: string;
  pass_threshold: number;
  questions: { q: string; choices: string[] }[];
}

export interface LessonProgressRow {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  quiz_score: number | null;
  completed_at: string | null;
}

export interface CertificateRow {
  id: string;
  user_id: string;
  track_id: TrackId;
  issued_at: string;
}

// ---- Derived view models (computed, not stored) ----------------------------

export interface TrackProgress {
  trackId: TrackId;
  trackName: string;
  totalLessons: number;
  completedLessons: number;
  percent: number; // 0-100, rounded
  certified: boolean;
}

// Result returned by the quiz-grading server action.
export interface QuizGradeResult {
  ok?: boolean;
  error?: string;
  passed?: boolean;
  score?: number; // 0-100
  passThreshold?: number;
  // Per-question feedback revealed only after submit.
  feedback?: {
    correct_index: number;
    chosen_index: number;
    correct: boolean;
    explanation?: string;
  }[];
}
