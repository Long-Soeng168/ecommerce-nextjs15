/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false, // prevent using Node.js file system module in the browser
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
      },
      {
        hostname: "opc.webdigify.com",
      },
      {
        hostname: "scholar.brolong.pro",
      },
      {
        hostname: "admin.thnal.org",
      },
      {
        hostname: "cdnjs.cloudflare.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
