// Component importation
import CompetenceCard from "../../cards/competence-card";
// Data importation
import CompetenceData from "../../../data/competences.json";

const Competences = () => {
    return (
        <div>
            <h2 className="title">Competences</h2>
            {
                CompetenceData.map(competence => (
                    <CompetenceCard key={competence.name} data={competence} />
                ))
            }
        </div>
    );
};

export default Competences;