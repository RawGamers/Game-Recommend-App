import Header from "@/common/header/Header.jsx";
import Sidebar from "@/common/sidebar/Sidebar.jsx";
import Footer from "@/common/footer/Footer.jsx";

const MainLayout = ({ children }) => {
	return (
		<div className="main_layout">
			<Header />
			<Sidebar />
			<div className="main_layout_content">
				<div className="view">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
