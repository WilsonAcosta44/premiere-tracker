import { useState } from 'react';
import PLAN from '../data/plan';
import { useReadOnlyProgress } from '../hooks/useReadOnlyProgress';
import ProgressBar from './ProgressBar';
import WeekSection from './WeekSection';

const PHASE_COLORS = ['#818cf8', '#fb923c', '#34d399'];

function buildPhaseStats(phases, completed) {
  return phases.map((phase) => {
    const allTasks = phase.weeks.flatMap((w) => w.tasks);
    const total    = allTasks.length;
    const done     = allTasks.filter((t) => completed[t.id]).length;
    return { phaseId: phase.id, total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  });
}

// Read-only phase view — same structure as PhaseView but no notes, no interaction
function ReadOnlyPhaseView({ phase, completed, stats }) {
  const color = PHASE_COLORS[phase.number - 1] ?? '#9b6dff';
  const noop  = () => {};

  return (
    <div className="phase-view">
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

      <div className="callout callout-info">
        <div className="callout-label">Goal</div>
        <p>{phase.goal}</p>
      </div>
      <div className="callout callout-warn">
        <div className="callout-label">Phase Checkpoint</div>
        <p>{phase.checkpoint}</p>
      </div>

      {/* Tasks — pointer-events disabled via CSS on .viewer-task-list */}
      <div className="week-list viewer-task-list">
        {phase.weeks.map((week) => (
          <WeekSection
            key={week.id}
            week={week}
            completed={completed}
            toggle={noop}
            toggleStep={noop}
          />
        ))}
      </div>
    </div>
  );
}

export default function ViewerDashboard({ ownerName, ownerPhoto, ownerUID, onClose }) {
  const { completed, loading } = useReadOnlyProgress(ownerUID);
  const [activePhaseId, setActivePhaseId] = useState('phase-1');

  if (loading) {
    return (
      <div className="app-loading" aria-label="Loading">
        <span className="app-loading-icon">🎬</span>
      </div>
    );
  }

  const phaseStats  = buildPhaseStats(PLAN.phases, completed);
  const totalTasks  = phaseStats.reduce((s, p) => s + p.total, 0);
  const totalDone   = phaseStats.reduce((s, p) => s + p.done,  0);
  const totalPct    = totalTasks ? Math.round((totalDone / totalTasks) * 100) : 0;
  const activePhase = PLAN.phases.find((p) => p.id === activePhaseId);
  const activeStats = phaseStats.find((s)  => s.phaseId === activePhaseId);

  return (
    <div className="app">
      {/* ── Viewer sidebar ───────────────────────────────────────────────── */}
      <aside className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <div className="viewer-owner-row">
            {ownerPhoto && (
              <img
                src={ownerPhoto}
                alt=""
                className="viewer-owner-avatar"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="viewer-owner-info">
              <span className="viewer-owner-label">Viewing progress</span>
              <span className="viewer-owner-name">{ownerName}</span>
            </div>
          </div>
          <div className="sidebar-overall">
            <div className="sidebar-overall-row">
              <span className="sidebar-overall-label">Overall progress</span>
              <span className="sidebar-overall-count">
                {totalDone}&thinsp;/&thinsp;{totalTasks}
              </span>
            </div>
            <ProgressBar pct={totalPct} color="var(--accent)" height={5} />
            <span className="sidebar-overall-pct">{totalPct}% complete</span>
          </div>
        </div>

        {/* Phase nav */}
        <nav className="sidebar-nav" aria-label="Phases">
          {PLAN.phases.map((phase, i) => {
            const stats    = phaseStats[i];
            const color    = PHASE_COLORS[i] ?? '#9b6dff';
            const isActive = phase.id === activePhaseId;

            return (
              <button
                key={phase.id}
                className={`sidebar-phase${isActive ? ' active' : ''}`}
                onClick={() => setActivePhaseId(phase.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="sidebar-phase-top">
                  <span className="sidebar-phase-num" style={{ color }}>
                    Phase {phase.number}
                  </span>
                  <span className="sidebar-phase-count">{stats.done}/{stats.total}</span>
                </div>
                <div className="sidebar-phase-title">{phase.title}</div>
                <ProgressBar pct={stats.pct} color={color} height={3} />
                <div className="sidebar-phase-pct">{stats.pct}%</div>
              </button>
            );
          })}
        </nav>

        {/* Back button */}
        <div className="sidebar-footer">
          <button className="viewer-back-btn" onClick={onClose}>
            ← Back to my dashboard
          </button>
        </div>
      </aside>

      {/* ── Read-only main content ───────────────────────────────────────── */}
      <main className="main">
        <div className="viewer-readonly-banner">
          👁&nbsp; Read-only view — task completion only, notes are private
        </div>
        {activePhase && (
          <ReadOnlyPhaseView
            phase={activePhase}
            completed={completed}
            stats={activeStats}
          />
        )}
      </main>
    </div>
  );
}
