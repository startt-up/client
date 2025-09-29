import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-links">
          <p>Get connected with us on social networks:</p>
          <div className="social-icons">
            <a href="#">F</a>
            <a href="#">G</a>
            <a href="#">X</a>
            <a href="#">in</a>
            <a href="#">insta</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <p className="copyright-line">Copyright line</p>
      </div>
    </footer>
  );
};

export default Footer;
