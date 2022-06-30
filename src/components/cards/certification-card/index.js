const CertificationCard = props => {
    return (
        <div className="card-container">
            <p className="bold">{props.data.school}</p>
            <p>{props.data.diplome}</p>
            <p>{props.data.obtention}</p>
            <p>Date d'obtention : {props.data.date}</p>
        </div>
    );
};

export default CertificationCard;