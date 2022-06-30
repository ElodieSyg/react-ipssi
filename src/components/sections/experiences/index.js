// Components importations
import ExperienceCard from "../../cards/experience-card";
// Data importations
import ExperienceData from "../../../data/experiences.json";

const Experiences = () => {
    return (
        <div>
            <h2 className="title">Experiences</h2>
            {
                ExperienceData.map(experience => (
                    <ExperienceCard key={experience.company} data={experience} />
                ))
            }
        </div>
    );
};

export default Experiences;