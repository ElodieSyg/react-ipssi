import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views importations
import NotFound from "../../pages/404/index";
import Contact from "../../pages/contact/index";
import CV from "../../pages/cv/index";
import Home from "../../pages/home/index";
import Project from "../../pages/project/index";
// Components importations
import Navbar from "../../components/navbar/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/cv" element={<CV />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;