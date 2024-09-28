"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
	fruits: ["Apple", "Banana", "Orange"],
	animals: ["Cat", "Dog", "Elephant"],
	cars: ["BMW", "Audi", "Tesla"],
};

const Test = () => {
	const [selectedCategory, setSelectedCategory] = useState("fruits");

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Select a Category</h1>
			<div style={{ marginBottom: "20px" }}>
				{Object.keys(categories).map((category) => (
					<button
						key={category}
						onClick={() => handleCategoryChange(category)}
						style={{
							marginRight: "10px",
							padding: "10px 20px",
							cursor: "pointer",
						}}
					>
						{category}
					</button>
				))}
			</div>

			<motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={selectedCategory}>
				<AnimatePresence>
					{categories[selectedCategory].map((item, index) => (
						<motion.li
							key={item}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.2, delay: index * 0.3 }}
							style={{
								listStyle: "none",
								marginBottom: "10px",
								padding: "10px",
								background: "#f0f0f0",
								borderRadius: "5px",
							}}
						>
							{item}
						</motion.li>
					))}
				</AnimatePresence>
			</motion.ul>
		</div>
	);
};

export default Test;
