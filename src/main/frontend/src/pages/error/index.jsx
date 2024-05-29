import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="container">
            <p>Error</p>
            <p>3초 뒤 메인 페이지로 이동</p>
        </div>
    );
};

export default Error;
