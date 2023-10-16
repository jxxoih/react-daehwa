import { useNavigate } from "react-router-dom";
import "styles/notFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="notfoundContainer">
            <p className="errorCode">404</p>
            <p className="errorText">Not Found</p>
            <p className="goHome" onClick={() => navigate("/")}>돌아가기</p>
        </div>
    );
}

export default NotFound;