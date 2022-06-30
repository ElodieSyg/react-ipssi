import "../../../styles/about-me.modules.css";

const AboutMe = props => {
    return (
        <div className="about-me-container">
            <h3>{props.name}</h3>
            <img className="picture" src={props.src} alt={props.alt} width="150px" height="150px" />
            <p>{props.description}</p>
        </div>
    )
};

export default AboutMe;