import { MapPin, Clock, Phone, Mail, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Location() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Location & Hours' }]} />

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Location & Opening Hours</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Find us, plan your visit and check our opening hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
              <h2 className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-2">Location Details Awaiting Configuration</h2>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                The business address, phone number, email and opening hours have not yet been verified and configured. Once supplied, this page will display:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-amber-700 dark:text-amber-400">
                <li>• Verified street address and map</li>
                <li>• Opening hours for each day</li>
                <li>• Clickable phone and email</li>
                <li>• Directions from nearby landmarks</li>
                <li>• Parking and transport information</li>
                <li>• Accessibility details</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <MapPin size={18} className="text-neutral-400 dark:text-neutral-500 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Address</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">Awaiting configuration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <Clock size={18} className="text-neutral-400 dark:text-neutral-500 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Opening Hours</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">Awaiting configuration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <Phone size={18} className="text-neutral-400 dark:text-neutral-500 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Phone</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">Awaiting configuration</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <Mail size={18} className="text-neutral-400 dark:text-neutral-500 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Email</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">Awaiting configuration</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
              <div className="text-center">
                <MapPin size={32} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-2" />
                <p className="text-sm text-neutral-400 dark:text-neutral-500">Map will be displayed here when location is configured</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/booking" className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Book an Appointment <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
