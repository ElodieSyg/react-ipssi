import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    let location = useLocation()

    return (
        <div>
            <h1>Page introuvable</h1>

            <Link to="/" title="Revenir sur la page principale">
                Retour sur la page d&#39;accueil
            </Link>
            <br />
            <code>
                La page suivante : <b>{location.pathname}</b> est introuvable
            </code>

        </div>
    );
};

export default NotFound;