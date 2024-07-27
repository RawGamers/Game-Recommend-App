/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API;

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `http://localhost:8080/api/:path*`,
            }
        ]
    },
};

export default nextConfig;