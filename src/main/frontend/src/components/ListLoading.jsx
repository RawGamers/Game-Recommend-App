import styles from "./ListLoading.module.scss";

const ListLoading = () => {
	return (
		<section>
			<div className={styles.loading_container}>
				<div className={styles.loading_wrapper}>
					{[...Array(4)].map((_, index) => (
						<div key={index} className={styles.loading_item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ListLoading;
