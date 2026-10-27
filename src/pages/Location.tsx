import { MapPin, Clock, Phone, Mail, Car, ArrowRight, Navigation, Bus, Accessibility } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';
import { siteConfig } from '../config/site';

export default function Location() {
  const loc = siteConfig.location;
  const hours = loc.openingHours;

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Location & Hours' }]} />

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Visit xBraan1</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Find us, plan your visit and check our opening hours.</p>
        </div>

        {/* Response Time Promise */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">Our Response Promise</h3>
              <p className="text-sm text-blue-800 dark:text-blue-400">{siteConfig.policies.responseTimeTarget}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Address</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {loc.address}<br />
                    {loc.city}, {loc.state} {loc.postalCode}<br />
                    {loc.country}
                  </p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.postalCode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Get Directions <Navigation size={14} />
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Contact Us</h2>
              <div className="space-y-3">
                <a href={`tel:${loc.telephone}`} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <Phone size={16} className="flex-shrink-0" />
                  {loc.telephone}
                </a>
                <a href={`mailto:${loc.email}`} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <Mail size={16} className="flex-shrink-0" />
                  {loc.email}
                </a>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-start gap-3 mb-3">
                <Navigation size={20} className="text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">How to Find Us</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{loc.directions}</p>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-start gap-2">
                  <Car size={18} className="text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Parking</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">{loc.parking}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-start gap-2">
                  <Accessibility size={18} className="text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Accessibility</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">{loc.accessibility}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Opening Hours */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-neutral-900 dark:text-white" />
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Opening Hours</h2>
              </div>
              <div className="space-y-2">
                {Object.entries(hours).map(([day, time]) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 capitalize">{day}</span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784368459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="xBraan1 Location Map"
                />
              </div>
            </div>

            {/* Transport */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-start gap-3">
                <Bus size={20} className="text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Public Transport</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Easily accessible by public transport. Bus stops and subway stations within walking distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Book an Appointment <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
