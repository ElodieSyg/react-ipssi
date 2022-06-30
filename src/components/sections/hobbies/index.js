// Data importation
import HobbiesData from "../../../data/hobbies.json";

const Hobbies = () => {
    return (
        <div className="card-container">
            <h2 className="title">Hobbies</h2>
            {
                HobbiesData.map(hobby => (
                    <p>{hobby}</p>
                ))
            }
        </div>
    );
};

export default Hobbies;