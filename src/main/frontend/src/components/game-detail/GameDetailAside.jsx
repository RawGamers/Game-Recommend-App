import Link from "next/link";

// components
import Rate from "./Rate.jsx";

import styles from "./GameDetail.module.scss";

const GameDetailAside = () => {
	const releaseDate = new Date();
	// iso8601 형식으로 변환
	const formattedReleaseDate = releaseDate.toISOString().split("T")[0];

	return (
		<aside>
			<h1 className={styles.title}>Game Title: ㅇㅇ</h1>
			<p>
				발매일: <time dateTime={formattedReleaseDate}>{formattedReleaseDate}</time>
			</p>
			<Rate />
			<p>플랫폼: 스팀</p>
			<Link href={`https://store.steampowered.com/app/1599600/PlateUp/`} target="_blank" rel="noopener noreferrer">
				게임 페이지로 가기
			</Link>
		</aside>
	);
};

export default GameDetailAside;
