// Components importation
import AboutMe from "../../components/sections/about-me/index";
import Formations from "../../components/sections/formations/index";
import Experiences from "../../components/sections/experiences/index";
import Competences from "../../components/sections/competences/index";
import Certifications from "../../components/sections/certifications/index";
import Hobbies from "../../components/sections/hobbies/index";

const CV = () => {
    return (
        <div>
            <AboutMe
                src={"./profil.png"}
                alt="Photo de profil"
                description="Je me considère comme une geek avec un très bon relationnel"
                name="Elodie Sayavong" />
            <Formations />
            <Experiences />
            <Competences />
            <Certifications />
            <Hobbies />
        </div>
    );
};

export default CV;