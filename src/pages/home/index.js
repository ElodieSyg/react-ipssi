// Components importations
import React, { Suspense } from "react";

const Home = () => {
    const Loader = React.lazy(() => import("../../components/loader"));

    return (
        <div>
            <Suspense fallback={<Loader />}>
                Home
            </Suspense>
        </div>
    );
};

export default Home;