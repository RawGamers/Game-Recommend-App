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

	// const popularData = useFetch()
	// const newData = useFetch()

	return (
		<div className={styles.container}>
			<Nav selectedKeyWord={handleKeywordSelect} />
			<main>
				<h1>selected Keyword</h1>
				<List type={{ keyword: selectedKeyword }} />

				<h2>걍 리스트</h2>
				{/* {gameType.map((data, index) => (
					<List data={data} />
				))} */}
			</main>
		</div>
	);
};

export default Home;
