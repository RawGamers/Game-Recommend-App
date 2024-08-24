"use client";

import styles from "./GameInfo.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { NoImage } from "@/assets/svg/icon-no-image";

const GameDetailView = () => {
	const { gameId } = useParams();

	const releaseDate = new Date();
	// iso8601 형식으로 변환
	const formattedReleaseDate = releaseDate.toISOString().split("T")[0];

	return (
		<section>
			<div className={styles.container}>
				<div className={styles.background} />
				<div className={styles.thumbnail_wrapper}>
					<div className={styles.alter_img}>
						<NoImage />
					</div>
					<Image src={`/img/test1.png`} alt={`game thumbnail`} className={styles.thumbnail} width={1920} height={1080} priority />
				</div>

				<aside className={styles.info_wrapper}>
					<h1 className={styles.title}>Game Title: {gameId}</h1>
					<p>
						발매일: <time dateTime={formattedReleaseDate}>{formattedReleaseDate}</time>
					</p>
					<p>Rating: 8.24</p> {/* 마우스 오버 시 몇 명 투표했는지 확인 */}
					<p>플랫폼: 스팀</p>
					<Link href={`https://store.steampowered.com/app/1599600/PlateUp/`} target="_blank" rel="noopener noreferrer">
						게임 페이지로 가기
					</Link>
				</aside>

				<article className={styles.description}>
					<h2>관련 정보</h2>
					<p>비슷한 게임</p>
					<p>게임 카테고리 목록</p>
					<p>
						할인 기록:
						{/* https://www.metacritic.com/game/creatures-of-ava/ */}
						<a href="https://gg.deals/game/plateup#priceHistory" target="_blank" rel="noopener noreferrer">
							https://gg.deals/game/plateup#priceHistory
						</a>
					</p>
				</article>
			</div>
		</section>
	);
};

export default GameDetailView;
