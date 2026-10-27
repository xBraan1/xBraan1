import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Scissors, Sun, Moon } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-neutral-950 transition-colors duration-300">
      <ScrollToTop />
      
      {/* Header */}
      <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-sm flex items-center justify-center transition-colors">
                <Scissors size={16} className="text-white dark:text-neutral-900" />
              </div>
              <span className="text-lg font-semibold text-neutral-900 dark:text-white">xBraan1</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Home</Link>
              <Link to="/salon" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Salon</Link>
              <Link to="/barber" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Barber</Link>
              <Link to="/services" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Services</Link>
              <Link to="/gallery" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Gallery</Link>
              <Link to="/team" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Team</Link>
              <Link to="/about" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">About</Link>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-neutral-600" />}
              </button>

              <Link to="/booking" className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-neutral-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 dark:text-neutral-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors">
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

      {/* Mobile sticky booking CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 safe-area-bottom transition-colors">
        <Link
          to="/booking"
          className="block w-full text-center px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-black text-neutral-300 dark:text-neutral-400 py-12 pb-20 sm:pb-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <Scissors size={14} className="text-neutral-900" />
                </div>
                <span className="text-base font-semibold text-white dark:text-neutral-100">xBraan1</span>
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed">Premium salon and barbershop. Expert cuts, colour, styling and grooming for everyone.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white dark:text-neutral-100 uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/salon" className="hover:text-white transition-colors">Women's Salon</Link></li>
                <li><Link to="/barber" className="hover:text-white transition-colors">Men's Barbering</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Style Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white dark:text-neutral-100 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Transformations</Link></li>
                <li><Link to="/promotions" className="hover:text-white transition-colors">Promotions</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white dark:text-neutral-100 uppercase tracking-wider mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/location" className="hover:text-white transition-colors">Location & Hours</Link></li>
                <li><Link to="/booking" className="hover:text-white transition-colors">Book Online</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/preparation" className="hover:text-white transition-colors">Preparation & Aftercare</Link></li>
                <li><Link to="/policies" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 dark:border-neutral-900 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-600">&copy; {new Date().getFullYear()} xBraan1. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-600">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
