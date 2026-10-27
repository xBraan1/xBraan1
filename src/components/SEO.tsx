import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  jsonLd?: object;
}

export default function SEO({ title, description, canonical, ogImage, ogType = 'website', noIndex = false, jsonLd }: SEOProps) {
  const fullTitle = `${title} | xBraan1`;
  const siteUrl = 'https://xbraan1.example.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  // Default OG image if not provided
  const defaultOgImage = `${siteUrl}/og-image.jpg`;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="xBraan1" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="xBraan1" />
      <meta name="publisher" content="xBraan1" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
