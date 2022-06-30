import { Link } from "react-router-dom";
// CSS importation
import "./style.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/project" className="navbar-item">Projects</Link>
            <Link to="/cv" className="navbar-item">CV</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
        </div>
    );
};

export default Navbar;