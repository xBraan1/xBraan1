import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { services } from '../data/services';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(query.toLowerCase()) ||
    service.description.toLowerCase().includes(query.toLowerCase()) ||
    service.subcategory.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
        aria-label="Search services"
      >
        <Search size={18} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-lg shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-neutral-200 dark:border-neutral-800">
              <Search size={20} className="text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="flex-1 bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {query.trim() === '' ? (
                <div className="p-8 text-center text-neutral-500 dark:text-neutral-400">
                  <p className="text-sm">Start typing to search services...</p>
                  <p className="text-xs mt-2">Press <kbd className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">Esc</kbd> to close</p>
                </div>
              ) : filteredServices.length === 0 ? (
                <div className="p-8 text-center text-neutral-500 dark:text-neutral-400">
                  <p className="text-sm">No services found for "{query}"</p>
                </div>
              ) : (
                <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {filteredServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                            {service.name}
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-neutral-400">{service.subcategory}</span>
                            <span className="text-xs text-neutral-400">•</span>
                            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                              {service.priceFrom !== null ? `From $${service.priceFrom}` : 'POA'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-neutral-700 rounded border border-neutral-200 dark:border-neutral-600">↑↓</kbd> to navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-neutral-700 rounded border border-neutral-200 dark:border-neutral-600">↵</kbd> to select
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
