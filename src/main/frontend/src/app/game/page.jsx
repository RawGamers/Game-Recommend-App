"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./page.module.scss";

const Game = ({}) => {
	const pathname = usePathname();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<div className={styles.container}>
			<section>
				<div>
					<p>{pathname}</p>
				</div>
			</section>
		</div>
	);
};

export default Game;
