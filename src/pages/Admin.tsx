import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Admin() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white">Admin Dashboard</h1>
          <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full font-medium">Awaiting Configuration</span>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
          <h2 className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-2">Backend Integration Required</h2>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            The admin dashboard structure is prepared for future backend integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Appointments</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">View, manage and confirm bookings</p>
          </div>
          <div className="p-5 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Services & Pricing</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Edit service catalogue</p>
          </div>
          <div className="p-5 border border-neutral-100 dark:border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Team Management</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Manage staff profiles</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
