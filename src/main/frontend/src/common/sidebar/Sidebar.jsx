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
	// 즉각적으로 상태를 변경하기 위한 state
	const [isRotated, setIsRotated] = useState(false);
	// 지연된 상태를 관리하기 위한 state
	const [delayedRotate, setDelayedRotate] = useState(false);

	const handleToggle = () => {
		// 즉각적으로 padding-left 등을 변경하기 위해 isRotated 사용
		setIsRotated(!isRotated);

		// 0.5초 지연 후에 delayedRotate 상태 변경
		setTimeout(() => {
			setDelayedRotate(!isRotated);
		}, 400);

		// padding-left를 즉시 변경
		setTimeout(() => {
			const mainContent = document.querySelector(".main_layout_content");
			if (mainContent) {
				mainContent.style.paddingLeft = isRotated ? "250px" : "0";
			}
		}, 200);
	};

	return (
		<>
			<aside className={`${styles.container} ${delayedRotate ? styles.rotate : ""}`}>
				<div className={`${styles.wrapper} ${isRotated ? styles.rotate : ""}`}>
					<button type="button" onClick={handleToggle}>
						side
					</button>
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
