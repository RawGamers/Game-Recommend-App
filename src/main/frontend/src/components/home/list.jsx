"use client";

import styles from "./List.module.scss";
import Link from "next/link";
import Image from "next/image";

export const List = ({ categoryData }) => {
	return (
		<section>
			<div className={styles.list_container}>
				<div className={styles.list_wrapper}>
					{categoryData.length > 0 ? (
						categoryData.map((item, index) => (
							<div key={index} className={styles.list_item}>
								<Link href={`/game/${index}`}>
									<picture>
										<source srcSet={item.thumbnailImg} media="(max-width: 768px)" />
										<Image src={item.thumbnailImg} alt={`${item.title} game`} width={1920} height={1080} priority />
									</picture>
									<h2>{item.title}</h2>
									<p className={styles.description}>{item.description}</p>
									<p className={styles.rating}>{item.rating}</p>
								</Link>
							</div>
						))
					) : (
						<p>No games available in this category.</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default List;
