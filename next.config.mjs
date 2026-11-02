/** @type {import('next').NextConfig} */

// The website lives only at https://www.marifahtax.com.
// Vercel also serves every deployment at a *.vercel.app address. In production those
// addresses permanently redirect to www.marifahtax.com, so visitors and Google only ever
// see your own domain. Preview deployments (from other branches) stay reachable for
// testing but are hidden from search engines.
const SITE = "https://www.marifahtax.com";
const isProduction = process.env.VERCEL_ENV === "production";
const isPreview = process.env.VERCEL_ENV === "preview";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    if (!isProduction) return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.+)\\.vercel\\.app" }],
        destination: `${SITE}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    if (!isPreview) return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
}

export default nextConfig
