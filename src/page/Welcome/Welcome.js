import React from "react";
import "./welcome.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import r1 from "../../images/R1.jpg";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div>
      <div className="main">
        <div className="main-container">
          <div className="head">
            <h1>Presentation</h1>
            <p>
              Fondée le 8 janvier 2022 par Ethan (tatane), R1 ESPORT a été conçu
              afin de s’imposer dans le monde E-sportif.
              <br />
              <br /> La mission première de la structure est d’offrir une
              plateforme de partage pour tous les membres et partenaires afin de
              promouvoir l’eSport. Nous mettons un point d’honneur à accompagner
              nos équipes tout au long de leur développement afin d’assurer des
              performances optimales tout au long de leur parcours chez nous.{" "}
              <br />
              <br /> R1 souhaite être un tremplin pour les talents de demain. La
              structure désire offrir une plateforme aux passionnés de jeux
              vidéo afin qu’ils puissent s’épanouir et se développer dans
              l’eSport tout en étant soutenus par une organisation
              professionnelle.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <h2>FOLLOW US</h2>
        <p>ON</p>
        <div className="reseaux">
          <a
            href="https://twitter.com/r1_esport_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_twitter.png"
              alt="twitter"
              className="logo-reseaux"
            />
          </a>

          <a
            href="https://www.youtube.com/channel/UCTkWeEcFMf_pPWuFZRWJbow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_yt_blanc.png"
              alt="youtube"
              className="logo-reseaux"
            />
          </a>
          <a
            href="https://www.twitch.tv/r1_esport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
              alt="twitch"
              className="logo-reseaux"
            />
          </a>
          <a
            href="https://discord.com/invite/WnXCSBGUBh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_discord_blanc.png"
              alt="discord"
              className="logo-reseaux"
            />
          </a>
          <a
            href="https://www.tiktok.com/@r1_esport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_tiktok.png"
              alt="tik tok"
              className="logo-reseaux"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
