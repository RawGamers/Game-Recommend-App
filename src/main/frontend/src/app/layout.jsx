import "./globals.scss";

import Header from "@/common/header/Header.jsx";
import Sidebar from "@/common/sidebar/Sidebar.jsx";
import Footer from "@/common/footer/Footer.jsx";

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
				<Header />
				<Sidebar />
				<div className="main_layout">
					<div className="view">{children}</div>
					<Footer />
				</div>
				<ResizeHandler />
			</body>
		</html>
	);
}
