import { useEffect } from "react";
import { redirect } from "../../hooks/redirect";

const notFound = () => {
    // useEffect(() => {
    //     redirect('/');
    // }, []);

    return (
        <div>Not found</div>
    );
};

export default notFound;