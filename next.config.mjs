/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'via.placeholder.com',
            },
            {
                hostname: 'opc.webdigify.com',
            },
            {
                hostname: 'scholar.brolong.pro',
            },
        ],
    },
};

export default nextConfig;
