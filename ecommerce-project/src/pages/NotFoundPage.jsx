import { Link } from "react-router-dom";
import { Header } from "../componenst/Header";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
  return (
    <>
      <title>Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="not-found-page">
        <div className="not-found-container">
          <div className="error-code">404</div>
          <div className="error-message">Page Not Found</div>
          <div className="error-description">
            Sorry, the page you're looking for doesn't exist.
          </div>
          <Link to="/" className="back-to-home-button button-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}