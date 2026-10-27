import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 p-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
