import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-company">
  <img src="/company-logo-white.png" alt="Ming Fok" className="footer-logo" />

  <h3>MING FOK</h3>
  <span className="footer-subtitle">STEEL ROLLING</span>

  <p>
    Specialist in steel rolling, section bending and steel fabrication
    solutions for commercial, industrial and infrastructure projects.
  </p>
</div>

        {/* Middle */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h3>Contact</h3>

    
          <p>016-316 3897</p>
          <p>mingfokrolling@gmail.com</p>
         
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ming Fok Steel Rolling.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;