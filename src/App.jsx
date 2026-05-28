import { useState, useEffect } from 'react';
import PLAN from './data/plan';
import { useAuth }             from './hooks/useAuth';
import { useProgress }         from './hooks/useProgress';
import { useNotes }            from './hooks/useNotes';
import { useShareSettings }    from './hooks/useShareSettings';
import { useViewerAccess }     from './hooks/useViewerAccess';
import Sidebar                 from './components/Sidebar';
import PhaseView               from './components/PhaseView';
import LoginScreen             from './components/LoginScreen';
import ViewerDashboard         from './components/ViewerDashboard';

function buildPhaseStats(phases, completed) {
  return phases.map((phase) => {
    const allTasks = phase.weeks.flatMap((w) => w.tasks);
    const total = allTasks.length;
    const done  = allTasks.filter((t) => completed[t.id]).length;
    return { phaseId: phase.id, total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  });
}

export default function App() {
  const { user, loading, signIn, signOut }            = useAuth();
  const [activePhaseId, setActivePhaseId]             = useState('phase-1');
  const [sidebarOpen, setSidebarOpen]                 = useState(false);
  const { completed, toggle, reset }         = useProgress(user?.uid);
  const { notes, setNote }                   = useNotes(user?.uid);
  const { viewers, addViewer, removeViewer } = useShareSettings(user?.uid, user);
  const { viewerAccess, viewerLoading }      = useViewerAccess(user);
  const [viewingGrant, setViewingGrant]      = useState(null);

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = 'hidden';
    else             document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  // ── Auth loading ─────────────────────────────────────────────────────────
  if (loading || viewerLoading) {
    return (
      <div className="app-loading" aria-label="Loading">
        <span className="app-loading-icon">🎬</span>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen onSignIn={signIn} />;
  }

  // ── Viewer mode ──────────────────────────────────────────────────────────
  if (viewingGrant) {
    return (
      <ViewerDashboard
        ownerUID={viewingGrant.ownerUID}
        ownerName={viewingGrant.ownerName}
        ownerPhoto={viewingGrant.ownerPhoto}
        onClose={() => setViewingGrant(null)}
      />
    );
  }

  // ── Owner dashboard ──────────────────────────────────────────────────────
  const phaseStats  = buildPhaseStats(PLAN.phases, completed);
  const totalTasks  = phaseStats.reduce((s, p) => s + p.total, 0);
  const totalDone   = phaseStats.reduce((s, p) => s + p.done,  0);
  const totalPct    = totalTasks ? Math.round((totalDone / totalTasks) * 100) : 0;
  const activePhase = PLAN.phases.find((p) => p.id === activePhaseId);
  const activeStats = phaseStats.find((s) => s.phaseId === activePhaseId);

  return (
    <div className="app">
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        phases={PLAN.phases}
        phaseStats={phaseStats}
        totalDone={totalDone}
        totalTasks={totalTasks}
        totalPct={totalPct}
        activePhaseId={activePhaseId}
        onSelectPhase={setActivePhaseId}
        onReset={reset}
        user={user}
        onSignOut={signOut}
        viewers={viewers}
        onAddViewer={addViewer}
        onRemoveViewer={removeViewer}
        viewerAccess={viewerAccess}
        onViewProgress={setViewingGrant}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main">
        <header className="mobile-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <rect width="18" height="2" rx="1" fill="currentColor"/>
              <rect y="6" width="18" height="2" rx="1" fill="currentColor"/>
              <rect y="12" width="18" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
          <span className="mobile-header-title">🎬 Premiere Tracker</span>
          <span className="mobile-header-pct">{totalPct}%</span>
        </header>

        {activePhase && (
          <PhaseView
            phase={activePhase}
            completed={completed}
            toggle={toggle}
            stats={activeStats}
            notes={notes[activePhaseId]}
            onNoteChange={setNote}
          />
        )}
      </main>
    </div>
  );
}
