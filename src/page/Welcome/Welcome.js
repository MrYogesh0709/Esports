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
              <b>Traker e Sport </b>
              is an esports association, founded on September 15, 2017, by an
              enthusiast who wanted to make his dream come true. His goal is to
              create a <b>big family</b> with one goal: to be the <b> best !</b>{" "}
              To do this, he knew how to surround himself with trusted people
              and <b>golden</b> community in order to achieve his goal.
              <br />
              <br /> Present on different games (Fortnite, League of Legend and
              Valorant), the traker sets up events that are always more
              different from each other in order to entertain the world and
              democratize esports. The club is pushing for progress and does not
              intend to stop there. <br />
              <br /> In 2022 everything changes, with new partnerships and
              contacts, Traker is moving up a gear by recruiting the best
              amateur and professional players in everyday life as well as
              within its staff.
            </p>
          </div>
        </div>
      </div>

      <div className="box">
        <h2>FOLLOW US</h2>
        <p>ON</p>
        <div className="reseaux">
          <a
            href="https://twitter.com"
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
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_insta_blanc.png"
              alt="instgram"
              className="logo-reseaux"
            />
          </a>
          <a
            href="https://youtube.com/channel/UCTkWeEcFMf_pPWuFZRWJbow"
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
            href="https://twitch.tv/r1_esport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
              alt="twitch"
              className="logo-reseaux"
            />
          </a>
          <a href="https://discord.gg/WnXCSBGUBh" rel="noopener noreferrer">
            <img
              src="https://trakeresport.fr/static/img/logo_discord_blanc.png"
              alt="discord"
              className="logo-reseaux"
            />
          </a>
          <a
            href="https://tiktok.com"
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
