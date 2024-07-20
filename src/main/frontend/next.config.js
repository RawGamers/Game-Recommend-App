const withPWA = require("next-pwa")({
	dest: "public",
});

const nextConfig = {
	// 기존 Next.js 설정
};

module.exports = withPWA(nextConfig);
