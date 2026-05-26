import WeekSection from './WeekSection';
import ProgressBar from './ProgressBar';

const PHASE_COLORS = ['#818cf8', '#fb923c', '#34d399'];

export default function PhaseView({ phase, completed, toggle, stats, notes, onNoteChange }) {
  const color = PHASE_COLORS[phase.number - 1] ?? '#9b6dff';

  return (
    <div className="phase-view">
      {/* ── Phase header ── */}
      <header className="phase-header">
        <div className="phase-meta">
          <span className="phase-badge" style={{ color, borderColor: color }}>
            Phase {phase.number} of 3
          </span>
          <span className="phase-meta-text">
            {phase.duration} · {phase.length} · {phase.hoursPerWeek}
          </span>
        </div>
        <h1 className="phase-title">{phase.title}</h1>
        <div className="phase-progress-row">
          <div className="phase-progress-bar">
            <ProgressBar pct={stats.pct} color={color} height={7} />
          </div>
          <span className="phase-progress-label">
            {stats.done}&thinsp;/&thinsp;{stats.total} tasks · {stats.pct}%
          </span>
        </div>
      </header>

      {/* ── Callouts ── */}
      <div className="callout callout-info">
        <div className="callout-label">Goal</div>
        <p>{phase.goal}</p>
      </div>
      <div className="callout callout-warn">
        <div className="callout-label">Phase Checkpoint</div>
        <p>{phase.checkpoint}</p>
      </div>

      {/* ── Personal notes ── */}
      <div className="notes-section">
        <div className="notes-label">📝 My Notes</div>
        <textarea
          className="notes-textarea"
          placeholder="Track your progress, wins, questions, anything…"
          value={notes || ''}
          onChange={(e) => onNoteChange(phase.id, e.target.value)}
          rows={4}
          spellCheck={false}
        />
      </div>

      {/* ── Week sections ── */}
      <div className="week-list">
        {phase.weeks.map((week) => (
          <WeekSection
            key={week.id}
            week={week}
            completed={completed}
            toggle={toggle}
            toggleStep={toggle}
          />
        ))}
      </div>
    </div>
  );
}
