const ExperienceCard = props => {
    return (
        <div className="card-container">
            <p><span className="bold">{props.data.company}</span> | {props.data.description}</p>
            <p>{props.data.job}, {props.data.type}</p>
            <p>{props.data.secteur}</p>
            <p>Date d'entrée : {props.data.start_date}</p>
            <p>Date de sortie : {props.data.end_date}</p>
        </div>
    );
};

export default ExperienceCard