"use client";

import styles from "./CategoryListWrapper.module.scss";
import { useState, useEffect, useMemo, Suspense } from "react";
import data from "/public/data.json";

// components
import Category from "./Category.jsx";
import List from "./List.jsx";
import ListLoading from "@/components/ListLoading.jsx";

const CategoryListWrapper = () => {
	const [activeCategory, setActiveCategory] = useState(""); // 현재 활성화된 카테고리

	const categoryData = useMemo(() => {
		if (data[activeCategory]) {
			return data[activeCategory].map((item) => ({
				...item,
				rating: item.rating.toFixed(2), // rating 소수점 두 자리 까지만 출력
			}));
		}
		return [];
	}, [activeCategory]);

	useEffect(() => {
		const initialCategory = Object.keys(data)[0];
		setActiveCategory(initialCategory);
	}, []);

	// useEffect(() => {
	// 	if (activeCategory) {
	// 		fetch(`api/games?category=${activeCategory}`)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				const formattedData = data.map((item) => ({
	// 					...item,
	// 					rating: item.rating ? item.rating.toFixed(2) : "N/A",
	// 				}));
	// 				setCategoryData(formattedData);
	// 			})
	// 			.catch((error) => console.log("error is", error));
	// 	}
	// }, [activeCategory]);

	return (
		<div className={styles.container}>
			<Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<main>
				{/* <ListLoading /> */}
				<Suspense fallback={<ListLoading />}>
					<List categoryData={categoryData} category={activeCategory} />
				</Suspense>
			</main>
		</div>
	);
};

export default CategoryListWrapper;
