"use client";

import styles from "./categoryListWrapper.module.scss";
import Category from "./category";
import List from "./list";
import { useState, useEffect } from "react";
import data from "/public/data.json";

const CategoryListWrapper = () => {
	const [activeCategory, setActiveCategory] = useState([]);
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		const initialCategory = Object.keys(data)[0];
		setActiveCategory(initialCategory);
	}, []);

	useEffect(() => {
		if (data[activeCategory]) {
			// rating 소수점 두 자리 까지만 출력
			const formattedData = data[activeCategory].map((item) => ({
				...item,
				rating: item.rating.toFixed(2),
			}));
			setCategoryData(formattedData);
		}
	}, [activeCategory]);

	return (
		<div className={styles.container}>
			<Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<main>
				<List categoryData={categoryData} />
			</main>
		</div>
	);
};

export default CategoryListWrapper;
