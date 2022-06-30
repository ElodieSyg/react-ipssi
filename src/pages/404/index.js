import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div>Not Found</div>
    );
};

export default NotFound;