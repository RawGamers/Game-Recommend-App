const withPWA = require("next-pwa")({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.API_BASE_URL}/:path*`,
			},
		];
	},
};

module.exports = withPWA(nextConfig);
