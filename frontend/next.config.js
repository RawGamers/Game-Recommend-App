const withPWA = require("next-pwa")({
	dest: "public",
});

const nextConfig = {
	// 기존 Next.js 설정

	// 빌드 시 앱 실행에 필요한 리소스(코드)만 추출하도록 하는 속성.
	output: 'standalone'
};

module.exports = withPWA(nextConfig);
