"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { Search } from "@/assets/svg/icon-search.jsx";
import { useRef, useState, useEffect } from "react";

const Header = () => {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const searchBarRef = useRef(null);
	const searchInputRef = useRef(null);

	const showSearchBarHandler = () => {
		setShowSearchBar(true);
	};

	const handleClickOutside = (event) => {
		if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
			setShowSearchBar(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<header className={styles.container}>
				<Link className={styles.logo} href="/">
					RAW GAMES
				</Link>
				<ul>
					<li className={styles.search_input_container}>
						{/* https://gg.deals/ */}
						<form>
							<div
								onClick={showSearchBarHandler}
								ref={searchBarRef}
								className={`${styles.search_input_wrapper} ${showSearchBar ? styles.expand : ""}`}
							>
								<Search />
								<input ref={searchInputRef} type="search" autoComplete="off" placeholder="검색" />
							</div>
						</form>
						<div className={styles.recommend}>dd</div>
					</li>
					<li>
						<Link href="/auth/sign-in">로그인</Link>
					</li>
					<li>
						<Link href="/auth/sign-up">회원가입</Link>
					</li>
				</ul>
			</header>
		</>
	);
};

export default Header;
