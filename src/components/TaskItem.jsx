import { useState } from 'react';

const TYPE_CONFIG = {
  watch:    { label: 'watch',    color: '#60a5fa', bg: 'rgba(96,165,250,0.13)'   },
  practice: { label: 'practice', color: '#fb923c', bg: 'rgba(251,146,60,0.13)'   },
  project:  { label: 'project',  color: '#a855f7', bg: 'rgba(168,85,247,0.13)'   },
  review:   { label: 'review',   color: '#34d399', bg: 'rgba(52,211,153,0.13)'   },
};

const ExternalIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" width="9" height="9" className="task-link-icon">
    <path
      d="M4 2H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6M6.5 1h2.5m0 0v2.5m0-2.5L5 6"
      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const CheckSvg = ({ size = 11 }) => (
  <svg viewBox="0 0 12 12" fill="none" style={{ width: size, height: size }}>
    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
    <path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TaskItem({ task, isCompleted, onToggle, completed = {}, toggleStep }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cfg      = TYPE_CONFIG[task.type] ?? TYPE_CONFIG.practice;
  const hasSteps = (task.steps?.length ?? 0) > 0;

  const handleRowClick = hasSteps
    ? () => setIsExpanded((x) => !x)
    : onToggle;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <div
      className={`task-item${isCompleted ? ' completed' : ''}${hasSteps ? ' has-steps' : ''}`}
      onClick={handleRowClick}
      role={hasSteps ? 'button' : 'checkbox'}
      aria-checked={hasSteps ? undefined : isCompleted}
      aria-expanded={hasSteps ? isExpanded : undefined}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleRowClick();
        }
      }}
    >
      {/* ── Checkbox (always toggles task completion) ── */}
      <div
        className="task-checkbox"
        onClick={hasSteps ? handleCheckboxClick : undefined}
        role={hasSteps ? 'checkbox' : undefined}
        aria-checked={hasSteps ? isCompleted : undefined}
        tabIndex={hasSteps ? 0 : undefined}
        onKeyDown={hasSteps ? (e) => {
          if (e.key === ' ') { e.stopPropagation(); onToggle(); }
        } : undefined}
      >
        {isCompleted && <CheckSvg />}
      </div>

      {/* ── Type badge ── */}
      <span className="task-badge" style={{ color: cfg.color, background: cfg.bg }}>
        {cfg.label}
      </span>

      {/* ── Content ── */}
      <div className="task-content">
        {/* text + chevron row */}
        <div className="task-header">
          <span className="task-text">{task.text}</span>
          {hasSteps && (
            <span className={`task-expand-chevron${isExpanded ? ' open' : ''}`} aria-hidden="true">
              <ChevronIcon />
            </span>
          )}
        </div>

        {/* resource links */}
        {task.links?.length > 0 && (
          <div className="task-links">
            {task.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="task-link"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        )}

        {/* expandable steps */}
        {hasSteps && isExpanded && (
          <ol className="task-steps">
            {task.steps.map((step, i) => {
              const stepDone = Boolean(completed[step.id]);
              return (
                <li
                  key={step.id}
                  className={`step-item${stepDone ? ' done' : ''}`}
                  onClick={(e) => { e.stopPropagation(); toggleStep?.(step.id); }}
                  role="checkbox"
                  aria-checked={stepDone}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.stopPropagation();
                      e.preventDefault();
                      toggleStep?.(step.id);
                    }
                  }}
                >
                  <div className="step-checkbox">
                    {stepDone && <CheckSvg size={9} />}
                  </div>
                  <span className="step-num">{i + 1}.</span>
                  <div className="step-body">
                    <span className="step-text">{step.text}</span>
                    {step.substeps?.length > 0 && (
                      <ul className="step-substeps">
                        {step.substeps.map((s, j) => (
                          <li key={j} className="step-substep">{s}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
