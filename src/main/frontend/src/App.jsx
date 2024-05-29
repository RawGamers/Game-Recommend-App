import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import styles from "./App.module.scss";

// components
import Header from "./common/header/index.jsx";
import Sidebar from "./common/sidebar/index.jsx";

// pages
import Home from "./pages/home/index.jsx";
import SignIn from "./pages/auth/sign-in.jsx";
import SignUp from "./pages/auth/sign-up.jsx";
import Error from "./pages/error/index.jsx";

const App = () => {
    const onResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <Router>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/auth/sign-in" element={<SignIn />} />
                    <Route path="/auth/sign-up" element={<SignUp />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
