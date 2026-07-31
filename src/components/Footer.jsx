import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <img
            src="/company-logo-white.png"
            alt="Ming Fok Steel Rolling"
            className="footer-logo"
          />

          <h3>Ming Fok Steel Rolling</h3>

          <p>
            Professional steel rolling and fabrication services in Malaysia
            since 2003. Delivering quality workmanship for industrial,
            commercial and infrastructure projects.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>

          <p>
  PT 2275, Jalan Kampung Baru Sungai Buloh,<br/> 
  47000 Selangor Darul Ehsan, Malaysia.
  </p>

          <p>
            📞 +60 16-316 3897
          </p>

          <p>
             <p> ✉ Email: <a href="mailto:ingfokrolling@gmail.com">mingfokrolling@gmail.com</a></p>
          </p>
        </div>

      </div>
      <div className="footer-bottom">
  <p className="copyright">
    © {new Date().getFullYear()} Ming Fok Steel Rolling. All Rights Reserved.
  </p>

  <div className="footer-legal">
    <Link to="/privacy-policy">Privacy Policy</Link>

    <span>|</span>

    <Link to="/terms-of-use">Terms of Use</Link>

    <span>|</span>

    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
      Sitemap
    </a>
  </div>
</div>

    </footer>
  );
}