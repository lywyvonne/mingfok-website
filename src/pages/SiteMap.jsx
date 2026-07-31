import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function SiteMap() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        <h1>Site Map</h1>

        <p>
          Browse all pages available on the Ming Fok Steel Rolling website.
        </p>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>

          <li>
            <Link to="/terms-of-use">Terms of Use</Link>
          </li>
        </ul>

      </div>
    </div>
  );
}