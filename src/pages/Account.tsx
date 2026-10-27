import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Account() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'My Account' }]} />
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">My Account</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Authentication Not Yet Configured</h2>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Customer account functionality is prepared for future integration. When configured, this page will allow you to:
          </p>
          <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-400">
            <li>• View and manage upcoming appointments</li>
            <li>• View appointment history</li>
            <li>• Manage personal details</li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Upcoming Appointments</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">No upcoming appointments.</p>
            <Link to="/booking" className="inline-block mt-3 text-xs font-medium text-neutral-900 dark:text-white underline">Book Now</Link>
          </div>
          <div className="p-6 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Appointment History</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Your appointment history will appear here.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
