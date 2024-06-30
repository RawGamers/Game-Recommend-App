"use client";

import styles from "./page.module.scss";
import Nav from "../components/home/nav";
import List from "../components/home/list";
import { useState } from "react";

const Home = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	return (
		<div className={styles.container}>
			<Nav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<main>
				<List activeCategory={activeCategory} />
			</main>
		</div>
	);
};

export default Home;
