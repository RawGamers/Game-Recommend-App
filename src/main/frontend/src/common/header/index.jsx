import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
    return (
        <header className={styles.container}>
            <Link className={styles.logo} to="/">
                RAW GAMES
            </Link>
            <div className={styles.btn_wrapper}>
                <Link to="/auth/sign-in">로그인</Link>
                <Link to="/auth/sign-up">회원가입</Link>
            </div>
        </header>
    );
};

export default Header;
