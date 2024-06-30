"use client";

import styles from "./nav.module.scss";

export const Nav = ({ activeCategory, setActiveCategory }) => {
	const navArray = [
		{ name: "모두", keyword: "all" },
		{ name: "롤플레이", keyword: "role" },
		{ name: "플랫포머", keyword: "platform" },
		{ name: "인디", keyword: "indie" },
		{ name: "시뮬레이션", keyword: "simulation" },
		{ name: "리듬", keyword: "rhythm" },
		{ name: "슈팅", keyword: "shooting" },
	];

	const changeCategory = (keyword) => {
		setActiveCategory(keyword);
	};

	return (
		<nav>
			{navArray.map((item, index) => (
				<button
					key={index}
					className={`${styles.nav_btn} ${item.keyword === activeCategory ? styles.active : ""}`}
					onClick={() => changeCategory(item.keyword)}
					type="button"
				>
					{item.name}
				</button>
			))}
		</nav>
	);
};

export default Nav;
