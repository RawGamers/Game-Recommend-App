const withPWA = require("next-pwa")({
	dest: "public",
});

const nextConfig = {
	async rewrites() {
		return [
			// {
			// 	source: "/api/:path*",
			// 	destination: `http://localhost:8080/api/:path*`,
			// },
		];
	},
};

module.exports = withPWA(nextConfig);
