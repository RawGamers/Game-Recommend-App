"use client";

import styles from "./GameInfo.module.scss";
import { useParams } from "next/navigation";

const GameDetailView = () => {
	const { category, gameId } = useParams();

	return (
		<section>
			<div className={styles.container}>
				<p>Category: {category}</p>
				<p>Game ID: {gameId}</p>
			</div>
		</section>
	);
};

export default GameDetailView;
