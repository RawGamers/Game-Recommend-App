import Link from "next/link";
import { Board } from "../../assets/svg/icon-board.jsx";
import styles from "./Sidebar.module.scss";

const menus = [
	{ path: "/game", name: "인기 게임", query: "popular", icon: Board },
	{ path: "/game", name: "신규 게임", query: "new", icon: Board },
	{ path: "/", name: "게시판", icon: Board },
];

const SideBar = () => {
	return (
		<>
			<aside className={styles.container}>
				<ul>
					{menus.map((menu, index) => (
						<li key={index}>
							<Link href={{ pathname: menu.path, query: menu.query || {} }}>
								<menu.icon />
								{menu.name}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};

export default SideBar;
