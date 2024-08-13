"use client";

import styles from "./GameInfo.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const GameDetailView = () => {
	const { gameId } = useParams();

	return (
		<section>
			<div className={styles.container}>
				<div className="thumbnail_wrapper">
					<Image src={`/img/game.jpg`} alt={`game`} className={styles.thumbnail} width={1920} height={1080} priority />
				</div>

				<div className="info_wrapper">
					<p>발매일</p>
					{/* https://www.metacritic.com/game/creatures-of-ava/ */}
					<p>Game ID: {gameId}</p>
					<p>rating</p>
					<p>플랫폼(스팀)</p>
					<p>할인 기록 https://gg.deals/game/plateup#priceHistory</p>
					<Link href={`https://store.steampowered.com/app/1599600/PlateUp/`} target="_blank" rel="noopener noreferrer">
						게임 페이지로 가기
					</Link>
				</div>

				<div className="description">
					<p>비슷한 게임</p>
				</div>
			</div>
		</section>
	);
};

export default GameDetailView;
