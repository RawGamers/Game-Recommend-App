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
				<div className="main_layout">
					<Header />
					<Sidebar />
					<div className="main_layout_content">
						<div className="view">{children}</div>
						<Footer />
					</div>
				</div>
				<ResizeHandler />
			</body>
		</html>
	);
}
