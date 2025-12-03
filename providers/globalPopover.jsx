'use client';

export default function GlobalPopover({ 
  isOpen, 
  title, 
  message, 
  type, 
  position, 
  onClose 
}) {
  if (!isOpen) return null;

  const typeClass = `popover popover-${type}`;

  return (
    <div 
      className={typeClass}
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 1000
      }}
    >
      <div className="popover-header">
        <h3 className="popover-title">{title}</h3>
        <button 
          onClick={onClose}
          className="popover-close-btn"
        >
          ×
        </button>
      </div>
      <div className="popover-body">
        <p>{message}</p>
      </div>
      <div className="popover-arrow"></div>
    </div>
  );
}