import "./globals.scss";

// common
import Header from "../common/header/page.jsx";
import Sidebar from "../common/sidebar/page.jsx";
import Footer from "../common/footer/page.jsx";

// event
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
				<div className="layout_content">
					<div className="view">{children}</div>
					<Footer />
				</div>
				<ResizeHandler />
			</body>
		</html>
	);
}
