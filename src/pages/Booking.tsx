import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Banknote, Smartphone, Building2, Shield, AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { services } from '../data/services';
import { teamMembers } from '../data/team';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  processingNote: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit / Debit Card',
    description: 'Visa, Mastercard, American Express, Discover',
    icon: <CreditCard size={20} />,
    details: 'Card payment processed securely at the time of your appointment or online.',
    processingNote: 'All major cards accepted. Payments processed via secure encrypted gateway.',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Pay with your PayPal account or PayPal Credit',
    icon: <Shield size={20} />,
    details: 'You will be redirected to PayPal to complete payment securely.',
    processingNote: 'PayPal buyer protection applies. PayPal Credit available for qualifying purchases.',
  },
  {
    id: 'cashapp',
    name: 'Cash App',
    description: 'Pay via Cash App ($Cashtag)',
    icon: <Smartphone size={20} />,
    details: 'Send payment to our Cash App tag. Details provided upon booking confirmation.',
    processingNote: 'Cash App tag will be shared in your booking confirmation.',
  },
  {
    id: 'venmo',
    name: 'Venmo',
    description: 'Pay with your Venmo account',
    icon: <Smartphone size={20} />,
    details: 'Send payment to our Venmo handle. Details provided upon booking confirmation.',
    processingNote: 'Venmo handle will be shared in your booking confirmation.',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    description: 'Quick, secure payment with Apple Pay',
    icon: <Wallet size={20} />,
    details: 'Pay instantly using Face ID or Touch ID on your Apple device.',
    processingNote: 'Available on iPhone, iPad, Mac and Apple Watch.',
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    description: 'Fast checkout with Google Pay',
    icon: <Wallet size={20} />,
    details: 'Pay using your saved cards through Google Pay.',
    processingNote: 'Available on Android devices and Chrome browser.',
  },
  {
    id: 'mpesa',
    name: 'M-Pesa',
    description: 'Mobile money payment via M-Pesa STK push',
    icon: <Smartphone size={20} />,
    details: 'You will receive an STK push on your phone. Enter your M-Pesa PIN to confirm payment instantly.',
    processingNote: 'Requires M-Pesa registered phone number. Payment prompt sent directly to your device.',
  },
  {
    id: 'zelle',
    name: 'Zelle',
    description: 'Direct bank-to-bank transfer via Zelle',
    icon: <Building2 size={20} />,
    details: 'Send payment directly from your bank account using Zelle.',
    processingNote: 'Zelle details will be shared in your booking confirmation.',
  },
  {
    id: 'afterpay',
    name: 'Afterpay / Klarna',
    description: 'Buy now, pay in 4 interest-free instalments',
    icon: <Wallet size={20} />,
    details: 'Split your payment into 4 equal, interest-free instalments.',
    processingNote: 'Subject to approval. Available for services over $50.',
  },
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    description: 'Direct bank transfer / ACH payment',
    icon: <Building2 size={20} />,
    details: 'Transfer directly from your bank account. Details provided upon confirmation.',
    processingNote: 'Please allow 1–3 business days for transfer to clear.',
  },
  {
    id: 'cash',
    name: 'Cash',
    description: 'Pay in cash at the salon',
    icon: <Banknote size={20} />,
    details: 'Pay with cash when you arrive for your appointment.',
    processingNote: 'Exact change appreciated. No cash payment required at booking.',
  },
];

export default function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    paymentMethod: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'service':
        if (!value) return 'Please select a service';
        return '';
      case 'paymentMethod':
        if (!value) return 'Please select a payment method';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => {
        const next = { ...prev };
        if (error) next[field] = error;
        else delete next[field];
        return next;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => {
      const next = { ...prev };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'service', 'paymentMethod'] as const;
    const newErrors: Record<string, string> = {};
    
    for (const field of requiredFields) {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    }

    setErrors(newErrors);
    setTouched({ name: true, email: true, service: true, paymentMethod: true });

    if (Object.keys(newErrors).length === 0) {
      navigate('/booking/confirmation', { state: formData });
    }
  };

  const selectedPayment = paymentMethods.find(p => p.id === formData.paymentMethod);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-2">Book an Appointment</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">Complete the form below and we'll confirm your appointment.</p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Personal Details */}
          <fieldset>
            <legend className="text-base font-semibold text-neutral-900 dark:text-white mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Your Details</legend>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-3 py-2.5 border rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-colors ${
                    errors.name && touched.name ? 'border-red-400' : touched.name && !errors.name && formData.name ? 'border-green-400' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                />
                {errors.name && touched.name && <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-3 py-2.5 border rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-colors ${
                    errors.email && touched.email ? 'border-red-400' : touched.email && !errors.email && formData.email ? 'border-green-400' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                />
                {errors.email && touched.email && <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Phone <span className="text-xs text-neutral-400 font-normal">(optional)</span></label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={e => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </fieldset>

          {/* Service Selection */}
          <fieldset>
            <legend className="text-base font-semibold text-neutral-900 dark:text-white mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Service</legend>
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Service <span className="text-red-500">*</span></label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={e => handleChange('service', e.target.value)}
                  onBlur={() => handleBlur('service')}
                  className={`w-full px-3 py-2.5 border rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-colors ${
                    errors.service && touched.service ? 'border-red-400' : touched.service && !errors.service && formData.service ? 'border-green-400' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.filter(s => s.available).map(s => (
                    <option key={s.id} value={s.slug}>{s.name} {s.priceFrom !== null ? `(from $${s.priceFrom})` : ''}</option>
                  ))}
                </select>
                {errors.service && touched.service && <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="stylist" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Preferred Stylist / Barber <span className="text-xs text-neutral-400 font-normal">(optional)</span></label>
                <select
                  id="stylist"
                  value={formData.stylist}
                  onChange={e => handleChange('stylist', e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  <option value="">No preference</option>
                  {teamMembers.map(m => (
                    <option key={m.id} value={m.slug}>{m.name} — {m.role}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Preferred Date <span className="text-xs text-neutral-400 font-normal">(optional)</span></label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={e => handleChange('date', e.target.value)}
                    className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Preferred Time <span className="text-xs text-neutral-400 font-normal">(optional)</span></label>
                  <input
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={e => handleChange('time', e.target.value)}
                    className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Payment Method */}
          <fieldset>
            <legend className="text-base font-semibold text-neutral-900 dark:text-white mb-1 pb-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
              <CreditCard size={18} className="text-neutral-600 dark:text-neutral-400" />
              Payment Method <span className="text-red-500 text-sm font-normal">*</span>
            </legend>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 mt-3">Select your preferred payment method. All major options accepted.</p>

            {errors.paymentMethod && touched.paymentMethod && (
              <p className="text-xs text-red-600 mb-3 flex items-center gap-1" role="alert"><AlertCircle size={12} />{errors.paymentMethod}</p>
            )}

            <div className="grid sm:grid-cols-2 gap-3">
              {paymentMethods.map(method => (
                <label
                  key={method.id}
                  className={`relative flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.paymentMethod === method.id
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800 shadow-md'
                      : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:shadow-sm'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={formData.paymentMethod === method.id}
                    onChange={e => {
                      handleChange('paymentMethod', e.target.value);
                      setTouched(prev => ({ ...prev, paymentMethod: true }));
                    }}
                    className="sr-only"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors ${
                        formData.paymentMethod === method.id
                          ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                      }`} aria-hidden="true">
                        {method.icon}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white">{method.name}</span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{method.description}</p>
                  </div>
                  {formData.paymentMethod === method.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center" aria-hidden="true">
                      <svg className="w-3 h-3 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </label>
              ))}
            </div>

            {selectedPayment && (
              <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <p className="text-sm font-medium text-neutral-900 dark:text-white mb-1">{selectedPayment.name}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">{selectedPayment.details}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 italic">{selectedPayment.processingNote}</p>
              </div>
            )}

            <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-800 rounded-lg">
              <p className="text-[11px] text-neutral-500 dark:text-neutral-500">
                <strong>Security:</strong> Payment details are never stored in this form. Sensitive information is collected securely at the time of transaction or shared via secure channels after confirmation.
              </p>
            </div>
          </fieldset>

          {/* Notes */}
          <fieldset>
            <legend className="text-base font-semibold text-neutral-900 dark:text-white mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Additional Information</legend>
            <div className="mt-4">
              <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Notes <span className="text-xs text-neutral-400 font-normal">(optional)</span></label>
              <textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={e => handleChange('notes', e.target.value)}
                className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 resize-none"
                placeholder="Allergies, preferences, reference photos, or other details..."
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Submit Booking Request
          </button>

          <p className="text-xs text-neutral-500 text-center">
            Submitting this form does not confirm an appointment. We will respond to confirm availability. No payment is taken at this stage.
          </p>
        </form>
      </div>
    </PageTransition>
  );
}
