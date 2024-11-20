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
                hostname: 'isbn-nlc.org',
            },
        ],
    },
};

export default nextConfig;
