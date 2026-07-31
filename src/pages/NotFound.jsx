import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function NotFound() {
  return (
    <div className="privacy-page">
      <div className="privacy-container" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem", color: "#ff6b00" }}>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}