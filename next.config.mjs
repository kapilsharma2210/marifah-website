/** @type {import('next').NextConfig} */

// The website lives only at https://www.marifahtax.com.
// Vercel also serves every deployment (production and preview) at *.vercel.app addresses.
// All of those permanently redirect to www.marifahtax.com, so visitors and Google only
// ever see your own domain.
const SITE = "https://www.marifahtax.com";
const onVercel = Boolean(process.env.VERCEL);

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    if (!onVercel) return [];
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
    if (!onVercel) return [];
    // Belt and braces: anything still answered on a *.vercel.app address is never indexed.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.+)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
}

export default nextConfig
