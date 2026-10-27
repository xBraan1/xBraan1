import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Sparkles, Award, Palette, ThumbsUp, Users, Star, Clock, Phone, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { getLocalBusinessSchema } from '../utils/localBusinessSchema';
import { siteConfig } from '../config/site';

export default function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  
  return (
    <PageTransition>
      <SEO
        title="xBraan1 — Premium Salon & Barbershop"
        description="Expert haircuts, styling, coloring, beard grooming and more. Book your appointment at xBraan1, your premium salon and barbershop."
        canonical="/"
        jsonLd={localBusinessSchema}
      />
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

      {/* Why Choose Us */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-2">Why xBraan1</p>
            <h2 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white">The Premium Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Expert Stylists', desc: '12+ years experience across all hair types' },
              { icon: Palette, title: 'Premium Products', desc: 'Only professional-grade, salon-quality products' },
              { icon: ThumbsUp, title: 'Satisfaction Guaranteed', desc: "Not happy? We'll make it right, no questions asked" },
              { icon: Users, title: 'Inclusive Space', desc: 'Welcoming all genders, hair types, and styles' },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
                    <IconComponent size={24} className="text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-2">Our Team</p>
            <h2 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white">Meet the Experts</h2>
          </div>
          <Link to="/team" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Jordan M.', role: 'Senior Stylist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
            { name: 'Alex R.', role: 'Master Barber', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
            { name: 'Sam O.', role: 'Natural Hair', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80' },
            { name: 'Casey T.', role: 'Colourist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
            { name: 'Devon W.', role: 'Barber', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
            { name: 'Mia C.', role: 'Stylist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' },
          ].map((member, i) => (
            <Link key={i} to="/team" className="group text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-neutral-100 dark:bg-neutral-800">
                <OptimizedImage 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{member.name}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{member.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-2">Inspiration</p>
              <h2 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white">Style Gallery</h2>
            </div>
            <Link to="/gallery" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
              View gallery <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80',
              'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
              'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80',
              'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80',
              'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
              'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?w=400&q=80',
            ].map((img, i) => (
              <Link key={i} to="/gallery" className="group relative aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <OptimizedImage 
                  src={img} 
                  alt={`Style ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '5000+', label: 'Happy Clients' },
            { number: '30+', label: 'Services Offered' },
            { number: '4.9', label: 'Average Rating', hasStar: true },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <div className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center justify-center gap-1">
                {stat.number}
                {stat.hasStar && <Star size={28} className="fill-amber-400 text-amber-400" />}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-2">Testimonials</p>
            <h2 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'Best salon experience ever! Jordan understood exactly what I wanted and delivered beyond my expectations.', rating: 5 },
              { name: 'Marcus T.', text: "Alex is a master barber. My fade has never looked this good. The attention to detail is incredible.", rating: 5 },
              { name: 'Aisha K.', text: "Finally found a salon that truly understands natural hair. Sam is amazing and the products they use are top-notch.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-950/20 dark:to-amber-950/20 border border-rose-200 dark:border-rose-900/30 rounded-lg p-8 lg:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-rose-700 dark:text-rose-400 mb-2">Special Offer</p>
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-3">First Visit? Get 15% Off</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">New to xBraan1? Enjoy 15% off your first service. Book now and experience the difference.</p>
          <Link to="/booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Claim Offer <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 pb-32">
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
