import GameDetailThumbnail from "@/components/game-detail/GameDetailThumbnail.jsx";
import GameDetailAside from "@/components/game-detail/GameDetailAside.jsx";
import GameDetailArticle from "@/components/game-detail/GameDetailArticle.jsx";

import styles from "@/components/game-detail/GameDetail.module.scss";

const GameDetailView = () => {
	// const getImageUrl = (fileUrl) => {
	// 	return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${fileUrl}`;
	// };
	// <Image src={getImageUrl(item.fileUrl)} alt="이미지" width={100} height={100} />;

	return (
		<section className={styles.container}>
			<GameDetailThumbnail />
			<GameDetailAside />
			<GameDetailArticle />
		</section>
	);
};

export default GameDetailView;
