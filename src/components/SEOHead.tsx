import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
  schema?: object | object[];
  keywords?: string;
}

const SEOHead = ({
  title,
  description,
  canonical = "/",
  ogType = "website",
  ogImage,
  noIndex = false,
  schema,
  keywords,
}: SEOHeadProps) => {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const canonicalUrl = canonical === "/" ? SITE.url : `${SITE.url}${canonical}`;
  const imageUrl = ogImage ? `${SITE.url}${ogImage}` : `${SITE.url}${SITE.ogImage}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} — ${title}`} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${SITE.name} — ${title}`} />

      {/* JSON-LD Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
