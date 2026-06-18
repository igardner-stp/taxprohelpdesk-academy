"use client";

import type { InteractiveSlide, CalloutKind } from "@/lib/interactive";

// Renders one interactive-lesson slide as code-driven HTML/CSS using the brand
// tokens (navy / brand blue / surface). Layout-agnostic core: eyebrow → title →
// lead → bullets/callout. `layout` tunes alignment + emphasis. Pure-presentation
// (no audio/timeline logic) so it's easy to preview and restyle.

const calloutStyles: Record<CalloutKind, { wrap: string; label: string }> = {
  action: {
    wrap: "border-brand-200 bg-brand-50",
    label: "text-brand-700",
  },
  tip: {
    wrap: "border-brand-200 bg-brand-50",
    label: "text-brand-700",
  },
  warn: {
    wrap: "border-amber-200 bg-amber-50",
    label: "text-status-amber",
  },
  stat: {
    wrap: "border-navy-700 bg-navy-900 text-white",
    label: "text-brand-200",
  },
  quote: {
    wrap: "border-surface-200 bg-surface-50",
    label: "text-navy-500",
  },
};

function Callout({ slide }: { slide: InteractiveSlide }) {
  const c = slide.callout!;
  const s = calloutStyles[c.kind];
  const onDark = c.kind === "stat";
  return (
    <div className={`mt-6 rounded-2xl border p-5 sm:p-6 ${s.wrap}`}>
      {c.title && (
        <p className={`text-xs font-semibold uppercase tracking-wide ${s.label}`}>
          {c.title}
        </p>
      )}
      <p
        className={`text-xl font-semibold leading-snug sm:text-2xl ${
          onDark ? "text-white" : "text-navy-900"
        } ${c.title ? "mt-2" : ""} ${c.kind === "quote" ? "italic" : ""}`}
      >
        {c.text}
      </p>
    </div>
  );
}

export function SlideView({ slide }: { slide: InteractiveSlide }) {
  const isCover = slide.layout === "cover";
  const isRecap = slide.layout === "recap";
  // Tall layouts (lists / recaps) top-align so they stay scrollable inside the
  // 16:9 stage — centering an overflowing flex column makes the top unreachable.
  // Short layouts stay vertically centered for a polished "slide" look.
  const tall = slide.layout === "list" || slide.layout === "recap";
  const align = isCover
    ? "items-center justify-center text-center"
    : tall
      ? "items-start justify-start text-left"
      : "items-start justify-center text-left";

  return (
    <div
      className={`flex h-full w-full flex-col px-7 py-7 sm:px-12 sm:py-9 ${align}`}
    >
      {slide.eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            isCover ? "text-brand-200" : "text-brand-600"
          }`}
        >
          {slide.eyebrow}
        </p>
      )}

      {slide.title && (
        <h2
          className={`mt-2 font-semibold tracking-tight ${
            isCover
              ? "text-3xl text-white sm:text-5xl"
              : "text-2xl text-navy-900 sm:text-[2rem]"
          }`}
        >
          {slide.title}
        </h2>
      )}

      {slide.lead && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
          {slide.lead}
        </p>
      )}

      {slide.bullets && slide.bullets.length > 0 && (
        <ul className="mt-5 w-full max-w-2xl space-y-2.5">
          {slide.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-surface-200 bg-white px-4 py-2.5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                {isRecap ? i + 1 : "•"}
              </span>
              <span className="text-[15px] leading-relaxed text-navy-700">
                {b.label && (
                  <span className="font-semibold text-navy-900">{b.label}: </span>
                )}
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      {slide.callout && <div className="w-full max-w-2xl"><Callout slide={slide} /></div>}

      {/* Cover subtitle / recap "up next" */}
      {slide.subtitle && (
        <p
          className={`${isCover ? "mt-5 text-base text-surface-300" : "mt-6 text-sm font-medium text-navy-500"}`}
        >
          {isRecap ? <span className="text-brand-600">→ </span> : null}
          {slide.subtitle}
        </p>
      )}
    </div>
  );
}
