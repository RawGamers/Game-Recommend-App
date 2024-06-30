"use client";

import styles from "./page.module.scss";
import Nav from "../components/home/nav";
import List from "../components/home/list";
import { useEffect, useState } from "react";

const Home = () => {
	const [selectedKeyword, setSelectedKeyword] = useState(null);

	const handleKeywordSelect = (keyword) => {
		setSelectedKeyword(keyword);
	};

	useEffect(() => {
		console.log(selectedKeyword);
	}, [selectedKeyword]);

	return (
		<div className={styles.container}>
			<Nav selectedKeyWord={handleKeywordSelect} />
			<main>
				<List type={{ keyword: selectedKeyword }} />
			</main>
		</div>
	);
};

export default Home;
