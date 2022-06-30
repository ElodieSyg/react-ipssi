import { useNavigate } from "react-router-dom";

export const Redirect = (path) => {
    let navigate = useNavigate();
    navigate(path)
};