import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">Premium Salon & Barbershop</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Where precision meets <span className="italic text-neutral-300">personal style</span>
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              Expert cuts, colour, styling and grooming — crafted by a team who care about the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/booking" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-neutral-900 font-medium rounded-md hover:bg-neutral-100 transition-colors">
                Book an Appointment <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-neutral-600 text-white font-medium rounded-md hover:bg-white/5 transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Directions */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/salon" className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-rose-50 to-stone-50 dark:from-rose-950/20 dark:to-neutral-900 border border-rose-100 dark:border-rose-900/30 p-8 hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-md flex items-center justify-center mb-4">
                <Sparkles size={20} className="text-rose-700 dark:text-rose-400" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Women's Salon</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">Cuts, colour, balayage, braids, locs, silk presses, extensions, bridal styling and more.</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-rose-800 dark:text-rose-400 group-hover:gap-2 transition-all">
                Explore salon services <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          <Link to="/barber" className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-stone-50 dark:from-slate-950/20 dark:to-neutral-900 border border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center mb-4">
                <Scissors size={20} className="text-slate-700 dark:text-slate-400" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Men's Barbering</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">Fades, tapers, line-ups, beard sculpting, hot-towel shaves, designs and classic cuts.</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 dark:text-slate-400 group-hover:gap-2 transition-all">
                Explore barber services <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-2">What We Offer</p>
              <h2 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white">Our Services</h2>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Women's Haircut", slug: 'womens-cut', price: 55, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Women\'s haircut' },
              { name: "Men's Haircut", slug: 'mens-cut', price: 35, image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', alt: 'Men\'s haircut' },
              { name: 'Hair Consultation', slug: 'consultation', price: 0, image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Hair consultation' },
            ].map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="group block p-5 border border-neutral-100 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm transition-all">
                <div className="w-full h-40 rounded-md overflow-hidden mb-4 bg-neutral-100 dark:bg-neutral-800">
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.alt}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{service.name}</h3>
                <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  {service.price === 0 ? 'Free consultation' : `From $${service.price}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold mb-3">Ready for Your Next Look?</h2>
          <p className="text-sm text-neutral-300 dark:text-neutral-400 mb-6 max-w-md mx-auto">Book your appointment online or get in touch to discuss your style goals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-100 text-neutral-900 font-medium rounded-md hover:bg-neutral-100 dark:hover:bg-white transition-colors">
              Book Now <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-600 dark:border-neutral-500 text-white font-medium rounded-md hover:bg-white/5 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
