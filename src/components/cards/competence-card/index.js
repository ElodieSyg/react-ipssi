// CSS importations
import "../../../styles/competences.modules.css";

const CompetenceCard = props => {
    const stars = int => {
        if (typeof int !== 'number' || !int) return null;

        switch (int) {
            case 1:
                return (
                    <div>
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                    </div>
                )
            case 4:
                return (
                    <div>
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                    </div>
                )
            case 5:
                return (
                    <div>
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                        <img src="./etoile.png" alt="etoile" width="20px" height="20px" />
                    </div>
                )
            default:
                console.log("no level data");
        };
    };

    return (
        <div className="card-container">
            <div className="competence-name">
                <div className="header">
                    <img src={props.data.image} alt={props.data.name} width="50px" />
                    <p className="item">{props.data.name}</p>
                </div>
                <p>{stars(props.data.level)}</p>
            </div>
            <div className="card-container">
                {
                    props.data.frameworks.length >= 1 && <p>Frameworks : </p>
                }
                {
                    props.data.frameworks.map(framework => (
                        <li>{framework}</li>
                    ))
                }
            </div>
        </div>
    );
};

export default CompetenceCard;