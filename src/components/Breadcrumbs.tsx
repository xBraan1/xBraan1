import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xbraan1.example.com/' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        item: item.href ? `https://xbraan1.example.com${item.href}` : `https://xbraan1.example.com${location.pathname}`,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <ol className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-500 flex-wrap">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Home">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" aria-hidden="true" />
            {item.href ? (
              <Link to={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 dark:text-neutral-100 font-medium" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
