"use client";

import styles from "./Category.module.scss";
import { useRef } from "react";
export const Category = ({ activeCategory, setActiveCategory }) => {
	const categoryArray = [
		{ name: "어드벤처", keyword: "adventure" },
		{ name: "퍼즐", keyword: "puzzle" },
		{ name: "리듬", keyword: "rhythm" },
		{ name: "스포츠", keyword: "sports" },
		{ name: "레이싱", keyword: "racing" },
		{ name: "격투", keyword: "fighting" },
		{ name: "슈팅", keyword: "shooting" },
		{ name: "전략", keyword: "strategy" },
		{ name: "인디", keyword: "indie" },
		{ name: "롤플레이", keyword: "role" },
		{ name: "서바이벌", keyword: "survival" },
		{ name: "플랫포머", keyword: "platform" },
		{ name: "시뮬레이션", keyword: "simulation" },
		{ name: "RPG", keyword: "rpg" },
	];

	const categoryContainerRef = useRef(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);
	const dragAmount = useRef(0);

	const changeCategory = (keyword) => {
		setActiveCategory(keyword);
		fetch(`api/games?category=rpg`)
			.then((res) => res.json())
			.then((data) => console.log("data", data))
			.catch((error) => console.log("error is", error));
	};

	const handleMouseDown = (e) => {
		isDragging.current = true;
		startX.current = e.pageX - categoryContainerRef.current.offsetLeft;
		scrollLeft.current = categoryContainerRef.current.scrollLeft;
		categoryContainerRef.current.style.cursor = "grabbing";
		dragAmount.current = 0;
	};

	const handleMouseLeaveOrUp = () => {
		isDragging.current = false;
		categoryContainerRef.current.style.cursor = "grab";
	};

	const handleMouseMove = (e) => {
		if (isDragging.current) {
			e.preventDefault();
			const currentX = e.pageX - categoryContainerRef.current.offsetLeft;
			const moveAmount = currentX - startX.current;
			dragAmount.current += Math.abs(moveAmount);
			categoryContainerRef.current.scrollLeft = scrollLeft.current - moveAmount;
		}
	};

	const handleTouchStart = (e) => {
		isDragging.current = true;
		startX.current = e.touches[0].pageX - categoryContainerRef.current.offsetLeft;
		scrollLeft.current = categoryContainerRef.current.scrollLeft;
		dragAmount.current = 0;
	};

	const handleTouchMove = (e) => {
		if (isDragging.current) {
			e.preventDefault();
			const currentX = e.touches[0].pageX - categoryContainerRef.current.offsetLeft;
			const moveAmount = currentX - startX.current;
			dragAmount.current += Math.abs(moveAmount);
			categoryContainerRef.current.scrollLeft = scrollLeft.current - moveAmount;
		}
	};

	const handleTouchEnd = () => {
		isDragging.current = false;
	};

	const handleClick = (keyword) => {
		// 드래그 양이 15px 이하일 때만 클릭 이벤트 처리
		if (dragAmount.current < 15) {
			changeCategory(keyword);
		}
	};

	return (
		<div
			className={styles.categoryContainer}
			ref={categoryContainerRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeaveOrUp}
			onMouseUp={handleMouseLeaveOrUp}
			onMouseMove={handleMouseMove}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<ul className={styles.category}>
				{categoryArray.map((item, index) => (
					<li key={index}>
						<button
							className={`${styles.category_btn} ${item.keyword === activeCategory ? styles.active : ""}`}
							onClick={() => handleClick(item.keyword)}
							type="button"
						>
							{item.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
