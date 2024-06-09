import "./globals.scss";

// common
import Header from "../common/header/page.jsx";
import Sidebar from "../common/sidebar/page.jsx";
import Footer from "../common/footer/page.jsx";

export const metadata = {
	title: "Game Recommend App",
	description: "Game Recommend App",
};

export default function RootLayout({ children }) {
	// const onResize = () => {
	// 	const vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty("--vh", `${vh}px`);
	// };

	// useEffect(() => {
	// 	window.addEventListener("resize", onResize);
	// 	onResize();
	// 	return () => {
	// 		window.removeEventListener("resize", onResize);
	// 	};
	// }, []);

	return (
		<html lang="ko">
			<body>
				<Header />
				<Sidebar />
				<div className="content">
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
