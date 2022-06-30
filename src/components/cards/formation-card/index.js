const FormationCard = props => {
    return (
        <div className="card-container">
            <p className="bold">{props.data.name}</p>
            <img className="absolute" src={props.data.image} alt={props.data.name} width="80px" />
            <p>Diplome : {props.data.diplome}</p>
            <p>Domaine : {props.data.domain}</p>
            <p>Date d'entrée : {props.data.start_date}</p>
            <p>Date de sortie : {props.data.end_date}</p>
        </div>
    );
};

export default FormationCard;
