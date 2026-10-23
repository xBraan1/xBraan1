import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-neutral-950">
      <ScrollToTop />
      
      {/* Header */}
      <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-sm flex items-center justify-center">
                <Scissors size={16} className="text-white dark:text-neutral-900" />
              </div>
              <span className="text-lg font-semibold text-neutral-900 dark:text-white">xBraan1</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Home</Link>
              <Link to="/salon" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Salon</Link>
              <Link to="/barber" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Barber</Link>
              <Link to="/services" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Services</Link>
              <Link to="/gallery" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Gallery</Link>
              <Link to="/team" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Team</Link>
              <Link to="/about" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">About</Link>
              <Link to="/booking" className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200">
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <nav className="px-4 py-4 space-y-2">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Home</Link>
              <Link to="/salon" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Salon</Link>
              <Link to="/barber" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Barber</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Services</Link>
              <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Gallery</Link>
              <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">Team</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-700 dark:text-neutral-300">About</Link>
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-center rounded-md">
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-black text-neutral-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <Scissors size={14} className="text-neutral-900" />
                </div>
                <span className="text-base font-semibold text-white">xBraan1</span>
              </div>
              <p className="text-sm">Premium salon and barbershop. Expert cuts, colour, styling and grooming for everyone.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/salon" className="hover:text-white">Women's Salon</Link></li>
                <li><Link to="/barber" className="hover:text-white">Men's Barbering</Link></li>
                <li><Link to="/services" className="hover:text-white">All Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/team" className="hover:text-white">Team</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} xBraan1. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
