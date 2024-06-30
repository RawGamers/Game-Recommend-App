"use client";

import { useState } from "react";
import styles from "./nav.module.scss";

export const Nav = ({ selectedKeyWord }) => {
	const [navArray, setNavArray] = useState([
		{ name: "롤플레이", keyword: "role", active: true },
		{ name: "플랫포머", keyword: "platform", active: false },
		{ name: "인디", keyword: "indie", active: false },
		{ name: "시뮬레이션", keyword: "simulation", active: false },
		{ name: "리듬", keyword: "rhythm", active: false },
		{ name: "슈팅", keyword: "shooting", active: false },
	]);

	const changeCategory = (index) => {
		setNavArray((prevNavArray) => {
			const updatedNavArray = [...prevNavArray];
			updatedNavArray.forEach((item, i) => {
				if (i === index) {
					item.active = true;
					selectedKeyWord(item.keyword);
				} else {
					item.active = false;
				}
			});
			return updatedNavArray;
		});
	};

	return (
		<>
			<nav>
				{navArray.map((item, index) => (
					<button key={index} className={`${styles.nav_btn} ${item.active ? styles.active : ""}`} onClick={() => changeCategory(index)} type="button">
						{item.name}
					</button>
				))}
			</nav>
		</>
	);
};

export default Nav;
