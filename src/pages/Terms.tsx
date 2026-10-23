import PageTransition from '../components/PageTransition';

export default function Terms() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Terms of Service</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400">By using the xBraan1 website or booking our services, you agree to these terms.</p>
          <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Services</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Service availability, pricing and team member assignments are subject to change.</p>
        </div>
      </div>
    </PageTransition>
  );
}
