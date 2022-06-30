// Components importations
import FormationCard from "../../cards/formation-card";
// Data importations
import FormationData from "../../../data/formations.json";

const Formations = () => {
    return (
        <div>
            <h2 className="title">Formations</h2>
            <div>
                {
                    FormationData.map(formation => (
                        <FormationCard key={formation.name} data={formation} />
                    ))
                }
            </div>
        </div>
    );
};

export default Formations;