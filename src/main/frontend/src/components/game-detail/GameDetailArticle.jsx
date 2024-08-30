import styles from "./GameDetail.module.scss";

const GameDetailArticle = () => {
	return (
		<article>
			<h>관련 정보</h>
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
	);
};

export default GameDetailArticle;
