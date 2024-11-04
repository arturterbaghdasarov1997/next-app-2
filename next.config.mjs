/** @type {import('next').nextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.thecatapi.com',
            },
        ]
    }
};

export default nextConfig;