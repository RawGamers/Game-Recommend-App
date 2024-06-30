"use client";

import { useEffect } from "react";
import styles from "./list.module.scss";

export const List = ({ activeCategory }) => {
	useEffect(() => {
		console.log(activeCategory);
	}, [activeCategory]);

	return (
		<section>
			<h2>{activeCategory}</h2>
			<div className={styles.list_container}></div>
		</section>
	);
};

export default List;
