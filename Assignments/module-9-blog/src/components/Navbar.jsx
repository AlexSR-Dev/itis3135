import { Link } from "react-router";
import AlexLogo from "../assets/AlexLogo.png";

function Navbar() {
    return (
        <header className="navbar">
            <Link className="brand" to="#posts">
                <img
                    className="brand-logo"
                    src={AlexLogo}
                    alt="Alex Logo"
                />
                <span>AegisBlog</span>
            </Link>

            <nav aria-label="Main Hub Navigation">
                <Link to="/posts">Home</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;