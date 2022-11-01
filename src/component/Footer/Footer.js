import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="footer-div">
          <h3>About</h3>
          <p>
            The Traker EsportAssociation is a team created in 2017 by Antoine
            Toquec, alias AxiaTls
          </p>
        </div>
        <div className="footer-div">
          <h3>Social</h3>
          <ul className="links-sidebar">
            <li className="link-social">
              <a href="/" target="_blank" className="social-links">
                twitter
              </a>
            </li>
            <li className="link-social">
              <a href="/" target="_blank" className="social-links">
                discord
              </a>
            </li>
            <li className="link-social">
              <a href="/" target="_blank" className="social-links">
                youtube
              </a>
            </li>
            <li className="link-social">
              <a href="/" target="_blank" className="social-links">
                twitch
              </a>
            </li>
            <li className="link-social">
              <a href="/" target="_blank" className="social-links">
                instgram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-div">
          <h3>Contacts</h3>
          <Link to="/contact" style={{ color: "white" }}>
            Contact page
          </Link>
          <p>marketing.traker@gmail.com</p>
          <p>trader.contact@gmail.com</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>
          Copyright &#169; 2022 All rights reserved | Web design by R1 Esport
        </p>
      </div>
    </div>
  );
};

export default Footer;
