import { useNavigate } from "react-router-dom";

export const redirect = (path) => {
    console.log('inside redirect function')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    return navigate(path, { replace: true });
};