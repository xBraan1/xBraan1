import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Contact Us</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">Get in touch with xBraan1.</p>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-serif font-semibold text-neutral-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Have a question? We'd love to hear from you.</p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs text-amber-800 dark:text-amber-300">
                <strong>Configuration needed:</strong> Contact details will be displayed here once configured.
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name *</label>
                <input type="text" id="name" required className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email *</label>
                <input type="email" id="email" required className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message *</label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white resize-none" />
              </div>
              <button type="submit" className="w-full px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
