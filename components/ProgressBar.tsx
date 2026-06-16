// Accessible progress bar. Blue fill, turns green at 100%.
export function ProgressBar({
  percent,
  className = "",
  showLabel = false,
}: {
  percent: number;
  className?: string;
  showLabel?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(percent)));
  const complete = pct === 100;
  return (
    <div className={className}>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-surface-100"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-all ${
            complete ? "bg-status-green" : "bg-brand-600"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs font-medium text-navy-500">{pct}% complete</p>
      )}
    </div>
  );
}
