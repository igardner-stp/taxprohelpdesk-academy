"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SlideView } from "@/components/learn/SlideView";
import {
  Play,
  Pause,
  Replay,
  Captions,
  Volume,
  VolumeMute,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Lock,
} from "@/components/icons";
import { fmtTime, type LessonMediaManifest } from "@/lib/interactive";

const SPEEDS = [1, 1.25, 1.5, 0.75];

// Self-contained interactive narrated player: code-driven slides advance in
// sync with per-slide ElevenLabs audio. Captions (with word highlight when the
// manifest carries timings), a segmented scrub bar, chapter nav, play/pause,
// speed, mute, and replay. Calls onFinished() once when the last slide ends so
// the lesson page can mark progress.
export function InteractiveLessonPlayer({
  manifest,
  onFinished,
}: {
  manifest: LessonMediaManifest;
  onFinished?: () => void;
}) {
  const slides = manifest.slides;

  // Per-slide durations + prefix sums, for the global timeline.
  const { durations, prefix, total } = useMemo(() => {
    const durations = slides.map((s) => s.durationMs || 0);
    const prefix: number[] = [];
    let acc = 0;
    for (const d of durations) {
      prefix.push(acc);
      acc += d;
    }
    return { durations, prefix, total: acc || 1 };
  }, [slides]);

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0); // ms within the current slide
  const [rate, setRate] = useState(1);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [muted, setMuted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  // Highest slide index the learner has reached — chapter list is locked beyond this.
  const [highWaterMark, setHighWaterMark] = useState(0);
  // True once the current slide's audio ends naturally (or if the slide has no audio).
  const [currentSlideEnded, setCurrentSlideEnded] = useState(false);
  // Global ms ceiling the learner has actually listened to — used to block scrub-ahead.
  const [maxHeardMs, setMaxHeardMs] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playingRef = useRef(playing);
  const idxRef = useRef(idx);
  const rateRef = useRef(rate);
  const pendingSeekRef = useRef(0); // ms to seek to once the next src loads
  const finishedCbRef = useRef(onFinished);
  const firedFinishRef = useRef(false);
  const maxHeardMsRef = useRef(0);
  const finishedRef = useRef(false);
  const prefixRef = useRef(prefix);
  playingRef.current = playing;
  idxRef.current = idx;
  rateRef.current = rate;
  finishedCbRef.current = onFinished;
  finishedRef.current = finished;
  prefixRef.current = prefix;

  const slide = slides[idx];

  // ---- Load the audio for the current slide (src swap) ---------------------
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.src = slides[idx].audioUrl;
    const seekMs = pendingSeekRef.current;
    pendingSeekRef.current = 0;
    const onMeta = () => {
      a.playbackRate = rateRef.current;
      if (seekMs > 0) a.currentTime = Math.min(seekMs / 1000, a.duration || seekMs / 1000);
      setElapsed(seekMs);
      if (playingRef.current) a.play().catch(() => {});
    };
    a.addEventListener("loadedmetadata", onMeta, { once: true });
    a.load();
    return () => a.removeEventListener("loadedmetadata", onMeta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // ---- timeupdate + ended (attached once) ----------------------------------
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      const ms = a.currentTime * 1000;
      setElapsed(ms);
      const gMs = (prefixRef.current[idxRef.current] || 0) + ms;
      if (gMs > maxHeardMsRef.current) {
        maxHeardMsRef.current = gMs;
        setMaxHeardMs(gMs);
      }
    };
    const onEnded = () => {
      const i = idxRef.current;
      setCurrentSlideEnded(true);
      if (i < slides.length - 1) {
        pendingSeekRef.current = 0;
        setIdx(i + 1);
      } else {
        setPlaying(false);
        setFinished(true);
        setElapsed(durations[i] || 0);
        if (!firedFinishRef.current) {
          firedFinishRef.current = true;
          finishedCbRef.current?.();
        }
      }
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnded);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- track furthest slide reached (gates chapter list) ------------------
  useEffect(() => {
    setHighWaterMark((prev) => Math.max(prev, idx));
  }, [idx]);

  // ---- reset "current slide ended" whenever we land on a new slide ---------
  useEffect(() => {
    setCurrentSlideEnded(false);
  }, [idx]);

  // ---- play/pause + rate + mute reflected to the element -------------------
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => {});
    else a.pause();
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // ---- controls ------------------------------------------------------------
  const goToSlide = useCallback(
    (i: number, autoplay: boolean) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      setStarted(true);
      setFinished(false);
      if (clamped === idxRef.current) {
        const a = audioRef.current;
        if (a) {
          a.currentTime = 0;
          setElapsed(0);
        }
        if (autoplay) setPlaying(true);
        return;
      }
      if (autoplay) setPlaying(true);
      setIdx(clamped);
    },
    [slides.length]
  );

  const onPlayPause = useCallback(() => {
    setStarted(true);
    if (finished) {
      firedFinishRef.current = true; // already counted complete
      goToSlide(0, true);
      return;
    }
    setPlaying((p) => !p);
  }, [finished, goToSlide]);

  const seekToGlobalMs = useCallback(
    (ms: number) => {
      // When not finished, cap seek at the furthest point actually heard.
      const ceiling = finishedRef.current ? total - 1 : maxHeardMsRef.current;
      const clampMs = Math.max(0, Math.min(ceiling, ms));
      let i = prefix.findIndex((p, k) => clampMs >= p && clampMs < p + (durations[k] || 0));
      if (i < 0) i = slides.length - 1;
      const offset = clampMs - prefix[i];
      setFinished(false);
      setStarted(true);
      if (i === idxRef.current) {
        const a = audioRef.current;
        if (a) {
          a.currentTime = offset / 1000;
          setElapsed(offset);
        }
      } else {
        pendingSeekRef.current = offset;
        setIdx(i);
      }
    },
    [prefix, durations, total, slides.length]
  );

  // ---- scrub bar pointer handling ------------------------------------------
  const barRef = useRef<HTMLDivElement>(null);
  const seekFromClientX = useCallback(
    (clientX: number) => {
      const el = barRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      seekToGlobalMs(ratio * total);
    },
    [seekToGlobalMs, total]
  );
  const onBarPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    seekFromClientX(e.clientX);
  };
  const onBarPointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) seekFromClientX(e.clientX);
  };

  // ---- keyboard ------------------------------------------------------------
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      onPlayPause();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (canGoNext) goToSlide(idx + 1, playing);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToSlide(idx - 1, playing);
    }
  };

  const globalMs = (prefix[idx] || 0) + Math.min(elapsed, durations[idx] || elapsed);

  // Next is only allowed once the current slide's audio has ended naturally,
  // or if we've already been past this slide (revisiting).
  const hasAudio = !!slide.audioUrl;
  const canGoNext =
    !finished &&
    idx < slides.length - 1 &&
    (!hasAudio || idx < highWaterMark || currentSlideEnded);

  const cycleSpeed = () => {
    const next = SPEEDS[(SPEEDS.indexOf(rate) + 1) % SPEEDS.length];
    setRate(next);
  };

  // Active word for caption highlight.
  const activeWord = useMemo(() => {
    if (!slide.words || slide.words.length === 0) return -1;
    return slide.words.findIndex((w) => elapsed >= w.start && elapsed < w.end);
  }, [slide.words, elapsed]);

  return (
    <div
      className="select-none rounded-2xl border border-surface-200 bg-white shadow-card focus:outline-none focus:ring-2 focus:ring-brand-600/40"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="Interactive narrated lesson"
    >
      {/* ---- Stage ---- */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-navy-900 to-navy-800">
        {/* Cover slides own the dark gradient; content slides sit on white. */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none ${
            slide.layout === "cover" ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          key={slide.id}
          className={`absolute inset-0 overflow-auto transition-opacity duration-300 motion-reduce:transition-none ${
            slide.layout === "cover" ? "" : "bg-surface-50"
          }`}
        >
          <SlideView slide={slide} />
        </div>

        {/* Start / replay overlay */}
        {(!started || finished) && (
          <button
            onClick={onPlayPause}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-navy-900/45 backdrop-blur-[1px] transition hover:bg-navy-900/55"
            aria-label={finished ? "Replay lesson" : "Play lesson"}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg">
              {finished ? <Replay className="h-7 w-7" /> : <Play className="h-7 w-7" />}
            </span>
            <span className="text-sm font-semibold text-white">
              {finished ? "Replay lesson" : "Play lesson"}
            </span>
          </button>
        )}

        {/* Per-slide progress hairline */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10">
          <div
            className="h-full bg-brand-500 transition-[width] duration-150 ease-linear motion-reduce:transition-none"
            style={{
              width: `${Math.min(100, ((elapsed || 0) / (durations[idx] || 1)) * 100)}%`,
            }}
          />
        </div>
      </div>

      {/* ---- Controls ---- */}
      <div className="border-t border-surface-200 px-3 py-3 sm:px-4">
        {/* Segmented scrub bar */}
        <div
          ref={barRef}
          onPointerDown={onBarPointerDown}
          onPointerMove={onBarPointerMove}
          className="flex h-2.5 w-full cursor-pointer items-stretch gap-0.5"
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(total / 1000)}
          aria-valuenow={Math.round(globalMs / 1000)}
        >
          {slides.map((s, i) => {
            const segPct =
              i < idx ? 100 : i > idx ? 0 : ((elapsed || 0) / (durations[i] || 1)) * 100;
            return (
              <div
                key={s.id}
                className="relative h-full flex-1 overflow-hidden rounded-full bg-surface-200"
                style={{ flexGrow: durations[i] || 1 }}
              >
                <div
                  className="h-full bg-brand-600 motion-reduce:transition-none"
                  style={{ width: `${Math.min(100, segPct)}%` }}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-2.5 flex items-center gap-1.5">
          <button
            onClick={() => goToSlide(idx - 1, playing)}
            disabled={idx === 0}
            className="rounded-lg p-2 text-navy-600 transition hover:bg-surface-100 disabled:opacity-40"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={onPlayPause}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm transition hover:bg-brand-700"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

          <button
            onClick={() => canGoNext && goToSlide(idx + 1, playing)}
            disabled={!canGoNext}
            className="rounded-lg p-2 text-navy-600 transition hover:bg-surface-100 disabled:opacity-40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            onClick={() => goToSlide(idx, true)}
            className="rounded-lg p-2 text-navy-600 transition hover:bg-surface-100"
            aria-label="Replay this slide"
          >
            <Replay className="h-5 w-5" />
          </button>

          <span className="ml-1 font-mono text-xs tabular-nums text-navy-500">
            {fmtTime(globalMs)} / {fmtTime(total)}
          </span>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              onClick={cycleSpeed}
              className="rounded-lg px-2 py-1.5 text-xs font-semibold text-navy-600 transition hover:bg-surface-100"
              aria-label={`Playback speed ${rate}x`}
            >
              {rate}×
            </button>
            <button
              onClick={() => setCaptionsOn((c) => !c)}
              className={`rounded-lg p-2 transition hover:bg-surface-100 ${
                captionsOn ? "text-brand-600" : "text-navy-400"
              }`}
              aria-pressed={captionsOn}
              aria-label="Toggle captions"
            >
              <Captions className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMuted((m) => !m)}
              className="rounded-lg p-2 text-navy-600 transition hover:bg-surface-100"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeMute className="h-5 w-5" /> : <Volume className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ---- Captions ---- */}
      {captionsOn && (
        <div className="border-t border-surface-200 bg-surface-50 px-4 py-3">
          <p className="text-[15px] leading-relaxed text-navy-700">
            {slide.words && slide.words.length > 0 ? (
              slide.words.map((w, i) => (
                <span
                  key={i}
                  className={
                    i === activeWord
                      ? "rounded bg-brand-100 text-navy-900"
                      : i < activeWord
                        ? "text-navy-500"
                        : ""
                  }
                >
                  {w.w}{" "}
                </span>
              ))
            ) : (
              <span>{slide.narration}</span>
            )}
          </p>
        </div>
      )}

      {/* ---- Chapter list ---- */}
      <div className="border-t border-surface-200 p-3 sm:p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-500">
          Chapters
        </p>
        <ol className="space-y-1">
          {slides.map((s, i) => {
            const isCurrent = i === idx;
            const done = i < idx || (finished && i === slides.length - 1);
            // Locked = beyond the furthest slide reached, and lesson not yet finished
            const locked = !finished && i > highWaterMark;
            return (
              <li key={s.id}>
                <button
                  onClick={() => !locked && goToSlide(i, true)}
                  disabled={locked}
                  aria-disabled={locked}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                    locked
                      ? "cursor-not-allowed opacity-40"
                      : isCurrent
                        ? "bg-brand-50 text-navy-900"
                        : "text-navy-600 hover:bg-surface-100"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      locked
                        ? "bg-surface-200 text-navy-400"
                        : isCurrent
                          ? "bg-brand-600 text-white"
                          : done
                            ? "bg-green-100 text-status-green"
                            : "bg-surface-200 text-navy-500"
                    }`}
                  >
                    {locked ? (
                      <Lock className="h-3 w-3" />
                    ) : done && !isCurrent ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span className={`flex-1 truncate ${isCurrent ? "font-semibold" : ""}`}>
                    {s.title || s.eyebrow || `Slide ${i + 1}`}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-navy-400">
                    {locked ? "—" : fmtTime(durations[i] || 0)}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} preload="metadata" className="hidden" />
    </div>
  );
}
