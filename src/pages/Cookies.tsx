import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Cookies() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Cookie Policy</h1>
        <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-400">
          <section>
            <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mb-2">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website.</p>
          </section>
          <section>
            <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mb-2">Cookies We Use</h2>
            <div className="space-y-3">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <h3 className="font-medium text-neutral-900 dark:text-white text-sm">Essential Cookies</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Required for the website to function. Cannot be disabled.</p>
              </div>
              <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700">
                <h3 className="font-medium text-neutral-900 dark:text-white text-sm">Analytics Cookies</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Not yet configured. Only loaded with your consent.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
