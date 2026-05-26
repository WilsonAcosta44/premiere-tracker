export default function ProgressBar({ pct, color = '#9b6dff', height = 6 }) {
  return (
    <div className="progress-track" style={{ height }}>
      <div
        className="progress-fill"
        style={{
          width: `${Math.min(100, Math.max(0, pct))}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
