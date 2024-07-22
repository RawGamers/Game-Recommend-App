import Link from "next/link";
import styles from "./Header.module.scss";
import { Search } from "@/assets/svg/icon-search.jsx";

const Header = () => {
	return (
		<>
			<header className={styles.container}>
				<Link className={styles.logo} href="/">
					RAW GAMES
				</Link>
				<ul>
					<li className={styles.search_input_container}>
						<form>
							<div className={styles.search_input_wrapper}>
								<Search />
								<input type="search" autoComplete="off" placeholder="검색" />
							</div>
						</form>
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
