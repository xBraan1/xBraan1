import PageTransition from '../components/PageTransition';

export default function Gallery() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Style Gallery</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">Browse our style inspiration gallery.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <div className="w-full h-full flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                Gallery image {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
