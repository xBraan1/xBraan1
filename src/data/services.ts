export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'salon' | 'barber' | 'both';
  subcategory: string;
  description: string;
  longDescription: string;
  priceFrom: number | null;
  priceNote: string | null;
  duration: string;
  preparation: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  available: boolean;
  requiresConsultation: boolean;
  image: string;
  imageAlt: string;
  imageSource: string;
  imageLicense: string;
}

export const services: Service[] = [
  {
    id: 'consultation',
    name: 'Hair & Style Consultation',
    slug: 'consultation',
    category: 'both',
    subcategory: 'Consultations',
    description: 'A personalised consultation to discuss your hair goals, analyse your hair type and plan your ideal style.',
    longDescription: 'Our consultation service provides a thorough analysis of your hair type, texture, density and condition. We discuss your lifestyle, preferences and goals to create a tailored plan. This is recommended before any major colour change, chemical service or significant cut.',
    priceFrom: 0,
    priceNote: 'Complimentary with any service booking',
    duration: '15 min',
    preparation: ['Arrive with hair in its natural state if possible', 'Bring reference photos of styles you like', 'Note any previous chemical treatments'],
    aftercare: ['Follow any recommendations provided', 'Book your full service within 2 weeks for best results'],
    faqs: [{ question: 'Is the consultation free?', answer: 'Yes, consultations are complimentary when booked alongside a service.' }],
    relatedServices: ['womens-cut', 'mens-cut', 'colour-colouring'],
    available: true,
    requiresConsultation: false,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    imageAlt: 'Hair stylist consulting with a client in a modern salon',
    imageSource: 'Unsplash',
    imageLicense: 'Unsplash License — free for commercial use',
  },
  {
    id: 'womens-cut',
    name: "Women's Haircut",
    slug: 'womens-cut',
    category: 'salon',
    subcategory: 'Cuts',
    description: 'Precision cuts tailored to your face shape, hair texture and personal style.',
    longDescription: 'Our women\'s haircut service includes a thorough consultation, shampoo and conditioning, precision cutting and styling. Whether you want a dramatic transformation or a subtle refresh, our stylists create cuts that work with your natural texture and lifestyle.',
    priceFrom: 55,
    priceNote: 'Starting from — final price depends on hair length and complexity',
    duration: '45–60 min',
    preparation: ['Arrive with hair detangled', 'Bring inspiration photos', 'Wear your hair as you normally style it'],
    aftercare: ['Avoid washing for 24–48 hours', 'Use recommended products', 'Schedule a trim every 6–8 weeks'],
    faqs: [
      { question: 'Do you cut all hair types?', answer: 'Yes, our stylists are trained in all hair textures including curly, coily, straight and wavy hair.' },
      { question: 'How often should I get a trim?', answer: 'We recommend every 6–8 weeks for maintained styles, or 10–12 weeks for longer hair.' },
    ],
    relatedServices: ['blowdry-style', 'colour-colouring', 'treatment-deep-conditioning'],
    available: true,
    requiresConsultation: false,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    imageAlt: 'Woman with a fresh precision haircut in a salon',
    imageSource: 'Unsplash',
    imageLicense: 'Unsplash License — free for commercial use',
  },
  {
    id: 'mens-cut',
    name: "Men's Haircut",
    slug: 'mens-cut',
    category: 'barber',
    subcategory: 'Haircuts',
    description: 'Classic and contemporary cuts from fades and tapers to textured scissor cuts.',
    longDescription: 'Our men\'s haircut service covers everything from classic gentleman\'s cuts to modern fades, textured crops and precision line-ups. Every cut includes a consultation, shampoo, precision cutting and styling with product recommendations.',
    priceFrom: 35,
    priceNote: 'Starting from — varies by style complexity',
    duration: '30–45 min',
    preparation: ['Arrive with clean or day-old hair', 'Bring reference photos', 'Let us know your maintenance preferences'],
    aftercare: ['Wait 24 hours before washing', 'Use recommended styling products', 'Book maintenance every 2–4 weeks for fades'],
    faqs: [
      { question: 'What is a fade?', answer: 'A fade gradually blends hair from very short at the sides and back to longer on top. Variations include low, mid, high and skin fades.' },
      { question: 'How often should I come in for a fade?', answer: 'For a sharp fade, every 2–3 weeks is ideal.' },
    ],
    relatedServices: ['beard-trim', 'hot-towel-shave', 'line-up'],
    available: true,
    requiresConsultation: false,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    imageAlt: 'Barber performing a precision fade haircut',
    imageSource: 'Unsplash',
    imageLicense: 'Unsplash License — free for commercial use',
  },
];

export const serviceCategories = {
  salon: [
    { name: 'Consultations', slug: 'consultations' },
    { name: 'Cuts', slug: 'cuts' },
  ],
  barber: [
    { name: 'Haircuts', slug: 'haircuts' },
  ],
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServicesByCategory(category: 'salon' | 'barber'): Service[] {
  return services.filter(s => s.category === category || s.category === 'both');
}
