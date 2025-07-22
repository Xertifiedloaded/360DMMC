import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Elevate your career with a compelling digital portfolio that showcases your unique skills, achievements, and potential to global opportunities."
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="theme-color" content="#000000" />

        <meta name="title" content="360°DMMC - Through AI Technology Transformation" />
        <meta
          name="description"
          content="Elevate your career with a compelling digital portfolio that showcases your unique skills, achievements, and potential to global opportunities."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Edmil Amar" />
        <meta
          name="keywords"
          content="Every transformation journey has a beginning, middle, and ongoing evolution. We don't just implement, we partner with you through the entire lifecycle, ensuring sustainable growth that continuously adapts to market changes."
        />
        <meta name="publisher" content="360DMMC" />
        <meta
          name="copyright"
          content="©360dmmc. All rights reserved."
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        <link rel="icon" href="/360.png" sizes="any" />
        <link rel="icon" href="/360.png" type="image/svg+xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/360.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/360.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/360.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://360dmmc.com" />
        <meta property="og:site_name" content="360dmmc" />
        <meta
          property="og:title"
          content="360DMMC - 
Through AI Technology Transformation"
        />
        <meta
          property="og:description"
          content="Elevate your career with a compelling digital portfolio that showcases your unique skills, achievements, and potential to global opportunities."
        />
        <meta property="og:image" content="/360.svg" />
        <meta
          property="og:image:alt"
          content="Every transformation journey has a beginning, middle, and ongoing evolution. We don't just implement, we partner with you through the entire lifecycle, ensuring sustainable growth that continuously adapts to market changes."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2024-01-01T00:00:00Z" />

        {/* Twitter Card Meta Tags - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@360dmmc" />
        <meta name="twitter:creator" content="@360dmmc" />
        <meta
          name="twitter:title"
          content="360DMMC"
        />
        <meta
          name="twitter:description"
          content=" Every transformation journey has a beginning, middle, and ongoing evolution. We don't just implement, we partner with you through the entire lifecycle, ensuring sustainable growth that continuously adapts to market changes."
        />
        <meta
          name="twitter:image"
          content="https://360dmmc.com/wp-content/uploads/2024/08/PNG-Logo_Full-Color-scaled.png"
        />
        <meta
          name="twitter:image:alt"
          content="FolioSpace - Digital Portfolio Builder"
        />

        {/* Mobile and PWA Meta Tags */}
        <meta name="application-name" content="FolioSpace" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="FolioSpace" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="canonical" href="https://360dmmc.com" />
        <link rel="alternate" hrefLang="en" href="https://360dmmc.com" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://360dmmc.com"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://360dmmc.com/#organization",
                  name: "FolioSpace",
                  url: "https://360dmmc.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://360dmmc.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    " Every transformation journey has a beginning, middle, and ongoing evolution. We don't just implement, we partner with you through the entire lifecycle, ensuring sustainable growth that continuously adapts to market changes.",
                  founder: {
                    "@type": "Person",
                    name: "Makinde Olaitan",
                  },
                  foundingDate: "2024",
                  sameAs: ["https://twitter.com/360dmmc"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://360dmmc.com/#website",
                  url: "https://360dmmc.com",
                  name: "FolioSpace",
                  description: "Digital Portfolio Builder",
                  publisher: {
                    "@id": "https://360dmmc.com/",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://360dmmc.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebApplication",
                  name: "FolioSpace",
                  url: "https://360dmmc.com",
                  description:
                    "Elevate your career with a compelling digital portfolio that showcases your unique skills, achievements, and potential to global opportunities.",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web Browser",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  author: {
                    "@id": "https://360dmmc.com",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://360dmmc.com",
                },
              ],
            }),
          }}
        />

        {/* Security Headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#f44336",
              color: "white",
              fontFamily: "Arial, sans-serif",
            }}
          >
            You need to enable JavaScript to run this app.
          </div>
        </noscript>
      </body>
    </Html>
  );
}
