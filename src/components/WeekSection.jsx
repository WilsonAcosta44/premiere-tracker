import { useState } from 'react';
import TaskItem from './TaskItem';

export default function WeekSection({ week, completed, toggle, toggleStep }) {
  const [isOpen, setIsOpen] = useState(true);

  const total  = week.tasks.length;
  const done   = week.tasks.filter((t) => completed[t.id]).length;
  const allDone = done === total;

  return (
    <div className={`week-section${allDone ? ' all-done' : ''}`}>
      {/* ── Header ── */}
      <button
        className="week-header"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
      >
        <div className="week-header-left">
          <span className={`week-chevron${isOpen ? ' open' : ''}`}>
            <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
              <path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="week-title">{week.title}</span>
        </div>
        <div className="week-header-right">
          {allDone && <span className="week-done-badge">✓ Done</span>}
          <span className="week-count">{done}/{total}</span>
          <span className="week-hours">{week.hours}</span>
        </div>
      </button>

      {/* ── Body ── */}
      {isOpen && (
        <div className="week-body">
          <div className="task-list">
            {week.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                isCompleted={Boolean(completed[task.id])}
                onToggle={() => toggle(task.id)}
                completed={completed}
                toggleStep={toggleStep}
              />
            ))}
          </div>
          {week.notes && (
            <div className="week-notes">
              <span className="week-notes-icon">💡</span>
              <span>{week.notes}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
