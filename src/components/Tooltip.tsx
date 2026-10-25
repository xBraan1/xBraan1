import { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  id: string;
}

export default function Tooltip({ content, children, id }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      if (rect.top < 100) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [visible]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <span className="relative inline-flex items-center gap-1">
      {children}
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-1"
        aria-describedby={visible ? id : undefined}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onClick={() => setVisible(!visible)}
      >
        <Info size={12} aria-hidden="true" />
        <span className="sr-only">More information</span>
      </button>
      {visible && (
        <div
          ref={tooltipRef}
          id={id}
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-xs bg-neutral-900 dark:bg-neutral-700 text-white dark:text-neutral-100 rounded-md shadow-lg max-w-xs ${
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          } left-1/2 -translate-x-1/2`}
        >
          {content}
          <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-700 rotate-45 ${
            position === 'top' ? '-bottom-1' : '-top-1'
          }`} />
        </div>
      )}
    </span>
  );
}
