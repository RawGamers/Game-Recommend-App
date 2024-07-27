"use client";

import styles from "./CategoryListWrapper.module.scss";
import { useState, useEffect, useMemo, Suspense } from "react";

// components
import Category from "./Category.jsx";
import List from "./List.jsx";
import ListLoading from "@/components/ListLoading.jsx";

const CategoryListWrapper = () => {
	const [activeCategory, setActiveCategory] = useState(""); // 현재 활성화된 카테고리
	const [categoryData, setCategoryData] = useState([]); // fetched data

	useEffect(() => {
		const initialCategory = "rpg"; // or fetch the first category dynamically if needed
		setActiveCategory(initialCategory);
	}, []);

	useEffect(() => {
		if (activeCategory) {
			fetch(`api/games?category=${activeCategory}`)
				.then((res) => res.json())
				.then((data) => {
					const formattedData = data.map((item) => ({
						...item,
						rating: item.rating ? item.rating.toFixed(2) : "N/A", // assuming rating might be part of the data
					}));
					setCategoryData(formattedData);
				})
				.catch((error) => console.log("error is", error));
		}
	}, [activeCategory]);

	return (
		<div className={styles.container}>
			<Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<main>
				<Suspense fallback={<ListLoading />}>
					<List categoryData={categoryData} category={activeCategory} />
				</Suspense>
			</main>
		</div>
	);
};

export default CategoryListWrapper;
