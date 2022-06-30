import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components importations
import Navbar from "../../components/navbar/index";
import Loader from "../../components/loader/index";

const Router = () => {
    const Home = React.lazy(() => import("../../pages/home/index"));
    const Contact = React.lazy(() => import("../../pages/contact/index"));
    const CV = React.lazy(() => import("../../pages/cv/index"));
    const Project = React.lazy(() => import("../../pages/project/index"));
    const NotFound = React.lazy(() => import("../../pages/notfound/index"));

    return (
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/cv" element={<CV />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;