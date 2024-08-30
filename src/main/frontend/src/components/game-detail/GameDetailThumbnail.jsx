import Image from "next/image";

import { NoImage } from "@/assets/svg/icon-no-image";

import styles from "./GameDetail.module.scss";

const GameDetailThumbnail = () => {
	return (
		<div className={styles.thumbnail_wrapper}>
			<div className={styles.alter_img}>
				<NoImage />
			</div>
			<Image src={`/img/test1.png`} alt={`game thumbnail`} className={styles.thumbnail} width={1920} height={1080} priority />
		</div>
	);
};

export default GameDetailThumbnail;
