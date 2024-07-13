"use client";

import styles from "./list.module.scss";
import Link from "next/link";
import Image from "next/image";

export const List = ({ categoryData }) => {
	return (
		<section>
			<div className={styles.list_container}>
				<div className={styles.list_wrapper}>
					{categoryData.map((item, index) => (
						<div key={index} className={styles.list_item}>
							<Link href="/">
								<picture>
									<source srcSet={item.thumbnailImg} media="(max-width: 768px)" />
									<Image src={item.thumbnailImg} alt={`${item.title} game`} width={1920} height={1080} priority />
								</picture>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default List;
