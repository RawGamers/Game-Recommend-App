import styles from "./index.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <nav>
                <ul>
                    <li>롤플레잉</li>
                    <li>플랫포머</li>
                    <li>액션</li>
                    <li>인디</li>
                </ul>
            </nav>
            <main>
                <section>section1</section>
                <section>section2</section>
            </main>
        </div>
    );
};

export default Home;
