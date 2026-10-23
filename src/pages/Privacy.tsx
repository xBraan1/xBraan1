import PageTransition from '../components/PageTransition';

export default function Privacy() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Privacy Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400">This privacy policy explains how xBraan1 collects, uses and protects your personal data.</p>
          <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Data We Collect</h2>
          <p className="text-neutral-600 dark:text-neutral-400">We may collect your name, email, phone number, and booking preferences.</p>
        </div>
      </div>
    </PageTransition>
  );
}
