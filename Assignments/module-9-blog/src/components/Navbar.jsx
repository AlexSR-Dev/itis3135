import AlexLogo from "../assets/AlexLogo.png";

function Navbar() {
    return (
        <header className="navbar">
            <a className="brand" href="#home">
                <img
                    className="brand-logo"
                    src={AlexLogo}
                    alt="Alex Logo"
                />
                <span>AegisBlog</span>
            </a>

            <nav aria-label="Main Hub Navigation">
                <a href="#home">Home</a>
                <a href="#blog-posts">Blog</a>
                <a href="#comments">Comments</a>
            </nav>
        </header>
    );
}

export default Navbar;