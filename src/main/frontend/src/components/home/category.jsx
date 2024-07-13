"use client";

import styles from "./category.module.scss";
import { useRef } from "react";

export const Category = ({ activeCategory, setActiveCategory }) => {
	const categoryArray = [
		{ name: "롤플레이", keyword: "role" },
		{ name: "인디", keyword: "indie" },
		{ name: "슈팅", keyword: "shooting" },
		{ name: "리듬", keyword: "rhythm" },
		{ name: "서바이벌", keyword: "survival" },
		{ name: "플랫포머", keyword: "platform" },
		{ name: "시뮬레이션", keyword: "simulation" },
	];

	const scrollRef = useRef(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	const changeCategory = (keyword) => {
		setActiveCategory(keyword);
	};

	const handleMouseDown = (e) => {
		isDragging.current = true;
		startX.current = e.pageX - scrollRef.current.offsetLeft;
		scrollLeft.current = scrollRef.current.scrollLeft;
		scrollRef.current.style.cursor = "grabbing";
	};

	const handleMouseLeaveOrUp = () => {
		isDragging.current = false;
		scrollRef.current.style.cursor = "grab";
	};

	const handleMouseMove = (e) => {
		if (isDragging.current) {
			e.preventDefault();
			const x = e.pageX - scrollRef.current.offsetLeft;
			const walk = x - startX.current;
			scrollRef.current.scrollLeft = scrollLeft.current - walk;
		}
	};

	return (
		<div
			className={styles.categoryContainer}
			ref={scrollRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeaveOrUp}
			onMouseUp={handleMouseLeaveOrUp}
			onMouseMove={handleMouseMove}
		>
			<ul className={styles.category}>
				{categoryArray.map((item, index) => (
					<button
						key={index}
						className={`${styles.category_btn} ${item.keyword === activeCategory ? styles.active : ""}`}
						onClick={() => changeCategory(item.keyword)}
						type="button"
					>
						{item.name}
					</button>
				))}
			</ul>
		</div>
	);
};

export default Category;
