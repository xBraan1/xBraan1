import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, CreditCard, Mail, User, Scissors } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { services } from '../data/services';
import { teamMembers } from '../data/team';

interface BookingState {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  stylist?: string;
  date?: string;
  time?: string;
  paymentMethod?: string;
  notes?: string;
}

const paymentLabels: Record<string, string> = {
  'card': 'Credit / Debit Card',
  'paypal': 'PayPal',
  'cashapp': 'Cash App',
  'venmo': 'Venmo',
  'apple-pay': 'Apple Pay',
  'google-pay': 'Google Pay',
  'mpesa': 'M-Pesa',
  'zelle': 'Zelle',
  'afterpay': 'Afterpay / Klarna',
  'bank-transfer': 'Bank Transfer',
  'cash': 'Cash',
};

export default function BookingConfirmation() {
  const location = useLocation();
  const state = (location.state as BookingState) || null;

  if (!state || !state.name) {
    return <Navigate to="/booking" replace />;
  }

  const selectedService = services.find(s => s.slug === state.service);
  const selectedStylist = teamMembers.find(m => m.slug === state.stylist);

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Success header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Booking Request Received</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Thank you, {state.name}. We've received your request.</p>
        </div>

        {/* Booking details */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mb-6">
          <div className="px-5 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Booking Details</h2>
          </div>
          <dl className="divide-y divide-neutral-100 dark:divide-neutral-800">
            <div className="flex items-center gap-3 px-5 py-3">
              <Scissors size={16} className="text-neutral-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <dt className="text-xs text-neutral-500 dark:text-neutral-400">Service</dt>
                <dd className="text-sm font-medium text-neutral-900 dark:text-white">{selectedService?.name || state.service}</dd>
              </div>
              {selectedService?.priceFrom !== null && selectedService?.priceFrom !== undefined && (
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">from ${selectedService.priceFrom}</span>
              )}
            </div>

            {selectedStylist && (
              <div className="flex items-center gap-3 px-5 py-3">
                <User size={16} className="text-neutral-400 flex-shrink-0" />
                <div className="flex-1">
                  <dt className="text-xs text-neutral-500 dark:text-neutral-400">Preferred Stylist</dt>
                  <dd className="text-sm text-neutral-900 dark:text-white">{selectedStylist.name}</dd>
                </div>
              </div>
            )}

            {state.date && (
              <div className="flex items-center gap-3 px-5 py-3">
                <Calendar size={16} className="text-neutral-400 flex-shrink-0" />
                <div className="flex-1">
                  <dt className="text-xs text-neutral-500 dark:text-neutral-400">Preferred Date</dt>
                  <dd className="text-sm text-neutral-900 dark:text-white">{state.date}</dd>
                </div>
              </div>
            )}

            {state.time && (
              <div className="flex items-center gap-3 px-5 py-3">
                <Clock size={16} className="text-neutral-400 flex-shrink-0" />
                <div className="flex-1">
                  <dt className="text-xs text-neutral-500 dark:text-neutral-400">Preferred Time</dt>
                  <dd className="text-sm text-neutral-900 dark:text-white">{state.time}</dd>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 px-5 py-3">
              <CreditCard size={16} className="text-neutral-400 flex-shrink-0" />
              <div className="flex-1">
                <dt className="text-xs text-neutral-500 dark:text-neutral-400">Payment Method</dt>
                <dd className="text-sm text-neutral-900 dark:text-white">{state.paymentMethod ? (paymentLabels[state.paymentMethod] || state.paymentMethod) : 'Not specified'}</dd>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3">
              <Mail size={16} className="text-neutral-400 flex-shrink-0" />
              <div className="flex-1">
                <dt className="text-xs text-neutral-500 dark:text-neutral-400">Confirmation sent to</dt>
                <dd className="text-sm text-neutral-900 dark:text-white">{state.email}</dd>
              </div>
            </div>
          </dl>
        </div>

        {/* What happens next */}
        <div className="bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 mb-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">What happens next?</h2>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-600 dark:text-neutral-300 flex-shrink-0 mt-0.5">1</span>
              <span>We'll review your request and check availability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-600 dark:text-neutral-300 flex-shrink-0 mt-0.5">2</span>
              <span>We aim to respond within one business day.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-600 dark:text-neutral-300 flex-shrink-0 mt-0.5">3</span>
              <span>We'll confirm your appointment via email with full details.</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 text-center">
            Back to Home
          </Link>
          <Link to="/services" className="px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm font-medium rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 text-center">
            Browse Services
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
