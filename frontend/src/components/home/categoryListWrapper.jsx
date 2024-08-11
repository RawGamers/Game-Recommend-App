"use client";

import styles from "./categoryListWrapper.module.scss";
import { useState, useEffect, useMemo, Suspense } from "react";
import data from "../../../public/data.json";

// components
import Category from "./category.jsx";
import List from "./list.jsx";
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
