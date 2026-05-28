import { useState } from 'react';
import ProgressBar from './ProgressBar';

const PHASE_COLORS = ['#818cf8', '#fb923c', '#34d399'];

// ── Share Progress panel (owner only) ────────────────────────────────────────
function SharePanel({ viewers, onAddViewer, onRemoveViewer }) {
  const [isOpen,    setIsOpen]    = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [busy,      setBusy]      = useState(false);
  const [err,       setErr]       = useState('');

  const handleAdd = async () => {
    const trimmed = emailInput.trim().toLowerCase();
    if (!trimmed || !trimmed.includes('@')) { setErr('Enter a valid email.'); return; }
    if (viewers.includes(trimmed)) { setErr('Already added.'); return; }
    setBusy(true);
    setErr('');
    try {
      await onAddViewer(trimmed);
      setEmailInput('');
    } catch {
      setErr('Failed to save. Try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="share-panel">
      <button
        className="share-toggle-btn"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
      >
        <span>🔗 Share Progress</span>
        <span className={`share-toggle-chevron${isOpen ? ' open' : ''}`}>›</span>
      </button>

      {isOpen && (
        <div className="share-panel-body">
          <p className="share-panel-desc">
            Add a Google email address to grant view-only access to your task progress.
          </p>

          {/* Current viewers */}
          {viewers.length > 0 && (
            <ul className="share-viewers-list">
              {viewers.map((email) => (
                <li key={email} className="share-viewer-item">
                  <span className="share-viewer-email">{email}</span>
                  <button
                    className="share-viewer-remove"
                    onClick={() => onRemoveViewer(email)}
                    title="Revoke access"
                    aria-label={`Remove ${email}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Add viewer */}
          <div className="share-add-row">
            <input
              className="share-email-input"
              type="email"
              placeholder="email@example.com"
              value={emailInput}
              onChange={(e) => { setEmailInput(e.target.value); setErr(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              disabled={busy}
              aria-label="Viewer email address"
            />
            <button
              className="share-add-btn"
              onClick={handleAdd}
              disabled={busy || !emailInput.trim()}
            >
              {busy ? '…' : 'Add'}
            </button>
          </div>
          {err && <p className="share-err">{err}</p>}
        </div>
      )}
    </div>
  );
}

// ── Main Sidebar ──────────────────────────────────────────────────────────────
export default function Sidebar({
  phases,
  phaseStats,
  totalDone,
  totalTasks,
  totalPct,
  activePhaseId,
  onSelectPhase,
  onReset,
  onExport,
  onImport,
  user,
  onSignOut,
  // Share
  viewers,
  onAddViewer,
  onRemoveViewer,
  // Viewer access
  viewerAccess,
  onViewProgress,
  // Mobile
  isOpen,
  onClose,
}) {
  const handleSelectPhase = (id) => {
    onSelectPhase(id);
    onClose?.();
  };

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      {/* ── App header + overall progress ── */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">🎬</span>
          <span className="sidebar-brand-name">Premiere Tracker</span>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
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

      {/* ── Phase list ── */}
      <nav className="sidebar-nav" aria-label="Phases">
        {phases.map((phase, i) => {
          const stats    = phaseStats[i];
          const color    = PHASE_COLORS[i] ?? '#9b6dff';
          const isActive = phase.id === activePhaseId;

          return (
            <button
              key={phase.id}
              className={`sidebar-phase${isActive ? ' active' : ''}`}
              onClick={() => handleSelectPhase(phase.id)}
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

      {/* ── View shared progress (if viewer access granted) ── */}
      {viewerAccess?.length > 0 && (
        <div className="sidebar-viewer-access">
          {viewerAccess.map((grant) => (
            <button
              key={grant.ownerUID}
              className="viewer-access-btn"
              onClick={() => onViewProgress(grant)}
            >
              {grant.ownerPhoto && (
                <img
                  src={grant.ownerPhoto}
                  alt=""
                  className="viewer-access-avatar"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="viewer-access-label">
                <span className="viewer-access-prefix">👁 View progress</span>
                <span className="viewer-access-name">{grant.ownerName}</span>
              </span>
              <span className="viewer-access-arrow">›</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        {/* Share progress (owner only) */}
        <SharePanel
          viewers={viewers ?? []}
          onAddViewer={onAddViewer}
          onRemoveViewer={onRemoveViewer}
        />

        <div className="sidebar-footer-actions">
          <button className="footer-btn export-btn" onClick={onExport} title="Export progress to JSON">
            ↓ Export
          </button>
          <button className="footer-btn import-btn" onClick={onImport} title="Import progress from JSON">
            ↑ Import
          </button>
        </div>
        <button className="reset-btn" onClick={onReset} title="Reset all progress">
          Reset all progress
        </button>
      </div>

      {/* ── Signed-in user ── */}
      {user && (
        <div className="sidebar-user">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt=""
              className="sidebar-avatar"
              referrerPolicy="no-referrer"
            />
          )}
          <span className="sidebar-user-name" title={user.email}>
            {user.displayName || user.email}
          </span>
          <button className="sidebar-signout-btn" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      )}
    </aside>
  );
}
