import Link from "next/link";
import styles from "./page.module.scss";

const Header = () => {
	return (
		<header className={styles.container}>
			<Link className={styles.logo} href="/">
				RAW GAMES
			</Link>
			<div className={styles.btn_wrapper}>
				<Link href="/auth/sign-in">로그인</Link>
				<Link href="/auth/sign-up">회원가입</Link>
			</div>
		</header>
	);
};

export default Header;
