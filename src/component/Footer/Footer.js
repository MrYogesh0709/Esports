import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="footer-div">
          <h3>Social</h3>
          <ul className="links-sidebar">
            <li className="link-social">
              <a
                href="https://twitter.com/r1_esport_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                twitter
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://discord.com/invite/WnXCSBGUBh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                discord
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://www.youtube.com/channel/UCTkWeEcFMf_pPWuFZRWJbow"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                youtube
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://www.twitch.tv/r1_esport"
                target="_blank"
                className="social-links"
                rel="noopener noreferrer"
              >
                twitch
              </a>
            </li>
            <li className="link-social">
              <a
                href="https://www.tiktok.com/@r1_esport"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                tiktok
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-div">
          <h3>Contacts</h3>
          <Link to="/contact" style={{ color: "white" }}>
            Contact page
          </Link>

          <p>
            <a
              href="mailto:r1esportcontact@gmail.com?subject=r1esports"
              className="mail"
            >
              r1esportcontact@gmail.com
            </a>
          </p>
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
