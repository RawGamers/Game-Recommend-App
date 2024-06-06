import { Link } from "react-router-dom";
import { Board } from "../../assets/svg/icon-board.jsx";
import styles from "./index.module.scss";

const menus = [
	{ path: "/auth/sign-in", name: "인기 게임", icon: Board },
	{ path: "/", name: "신작 게임", icon: Board },
	{ path: "/", name: "카테고리별 게임", icon: Board },
	{ path: "/", name: "게시판", icon: Board },
];
const SideBar = () => {
	return (
		<aside className={styles.container}>
			<ul>
				{menus.map((menu, index) => (
					<li key={index}>
						<Link to={menu.path}>
							<menu.icon />
							{menu.name}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
