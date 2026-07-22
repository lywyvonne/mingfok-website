import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="/" className="logo">
          <img
            src="/icons/company-logo.png"
            alt="Ming Fok Steel Rolling"
          />

          <div className="logo-text">
            <h2>MING FOK</h2>
            <span>STEEL ROLLING</span>
          </div>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;