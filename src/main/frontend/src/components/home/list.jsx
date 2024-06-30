"use client";

import { useEffect } from "react";
import styles from "./list.module.scss";

export const Nav = (props) => {
	useEffect(() => {
		console.log(props.type.keyword);
	}, [props]);

	return (
		<>
			<section>
				<h2>{props.type.keyword}</h2>
				<div className={styles.list_container}>
					{/* {props.data.map((data) => (
					))} */}
					{/* <div className={styles.list_wrapper}>data</div> */}
				</div>
			</section>
		</>
	);
};

export default Nav;
