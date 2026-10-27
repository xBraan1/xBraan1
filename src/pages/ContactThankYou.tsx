import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function ContactThankYou() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white mb-3">Message Sent</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">Thank you for getting in touch. We aim to respond within one business day.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200">Back to Home</Link>
          <Link to="/services" className="px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm font-medium rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800">Browse Services</Link>
        </div>
      </div>
    </PageTransition>
  );
}
