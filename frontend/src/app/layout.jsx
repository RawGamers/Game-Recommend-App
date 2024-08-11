import "./globals.scss";

import ResizeHandler from "@/components/ResizeHandler.jsx";

export const metadata = {
	manifest: "/manifest.json",
	title: "Game Recommend App Title",
	description: "Game Recommend App Description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ko">
			<body>
				{children}
				<ResizeHandler />
			</body>
		</html>
	);
}
