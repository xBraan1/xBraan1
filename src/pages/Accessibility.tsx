import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Accessibility() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Accessibility' }]} />
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Accessibility Statement</h1>
        <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-400">
          <section>
            <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mb-2">Our Commitment</h2>
            <p>xBraan1 is committed to ensuring digital accessibility for people of all abilities.</p>
          </section>
          <section>
            <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mb-2">Standards</h2>
            <p>We aim to conform to WCAG 2.1 Level AA guidelines.</p>
          </section>
          <section>
            <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-white mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Semantic HTML and ARIA labels</li>
              <li>Keyboard navigation support</li>
              <li>Visible focus indicators</li>
              <li>Sufficient colour contrast</li>
              <li>Meaningful alt text for images</li>
              <li>Reduced-motion support</li>
            </ul>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
