import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Promotions() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Promotions' }]} />

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Promotions & Special Offers</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Current deals and packages. Check back regularly for new offers.</p>
        </div>

        {/* Placeholder state */}
        <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 border-dashed rounded-lg p-12 text-center">
          <Tag size={32} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-4" />
          <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">No Active Promotions</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-6">
            There are no active promotions at this time. When special offers are available, they will be displayed here.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            This section is configured by the business owner. Promotions will appear here when activated.
          </p>
        </div>

        {/* General info */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="p-6 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">First Visit Offer</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Information about first-visit offers will be displayed here when configured by the business.</p>
          </div>
          <div className="p-6 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Package Deals</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Multi-service packages and loyalty rewards will be displayed here when available.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/booking" className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Book an Appointment
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
