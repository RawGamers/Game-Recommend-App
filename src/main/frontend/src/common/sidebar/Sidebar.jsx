"use client";

import { useState } from "react";

import Link from "next/link";
import { Board } from "../../assets/svg/icon-board.jsx";
import styles from "./Sidebar.module.scss";

const menus = [
	{ path: "/game", name: "인기 게임", query: "popular", icon: Board },
	{ path: "/game", name: "신규 게임", query: "new", icon: Board },
	{ path: "/", name: "게시판", icon: Board },
];

const SideBar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const handleToggle = () => {
		setSidebarOpen(!sidebarOpen);

		const mainContent = document.querySelector(".main_layout");
		const contentCover = document.querySelector(".content_cover");
		if (mainContent) {
			mainContent.style.transform = sidebarOpen ? "translate3d(240px, 0, 0)" : "translate3d(0, 0, 0)";
			contentCover.style.opacity = sidebarOpen ? 1 : 0;
			contentCover.style.pointerEvents = sidebarOpen ? "auto" : "none";
			// contentCover 클릭 시 handleToggle()
		}
	};

	return (
		<>
			<button className={styles.test} type="button" onClick={handleToggle}>
				side
			</button>
			<aside className={styles.container}>
				<div className={`${styles.wrapper} ${sidebarOpen ? styles.rotate : ""}`}>
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
				</div>
			</aside>
		</>
	);
};

export default SideBar;
