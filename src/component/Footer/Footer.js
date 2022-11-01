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
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                twitter
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://discord.gg/WnXCSBGUBh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                discord
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://youtube.com/channel/UCTkWeEcFMf_pPWuFZRWJbow"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                youtube
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                target="_blank"
                className="social-links"
                rel="noopener noreferrer"
              >
                twitch
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
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
          Copyright &#169; 2022 All rights reserved <br /> Web design by R1
          ESPORT
        </p>
      </div>
    </div>
  );
};

export default Footer;
