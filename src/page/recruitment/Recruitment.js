import React from "react";
import "./recruitments.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="recuirment">
        <div className="recuirment-container">
          <h1>Our Recuirment</h1>
        </div>
      </section>
      <section className="details">
        <div className="c1">
          <img
            src="https://cdn.discordapp.com/attachments/1014565068849041429/1032200712286904340/Traker_Halloweens_Cup_2022-1.png"
            alt="img"
          />
        </div>
        <div className="c2">
          <h2>Traker Halloween's Cup 🎃</h2>
          <p className="c3">
            Halloween is the holiday of fear... At TRAKER, it's a holiday that
            allows us to get closer to you, the community 🤘
            <br />
            <br />
            On October 30, 2022, the Traker Halloween's Cup will take place , a
            duo competition open to streamers . Indeed, the competition is in
            Streamer X Viewer format . The invited or registered streamer
            invites one of their viewers for the competition 😊 An incredible
            way to bond with your community . <br />
            <br />
            This competition will take place in Creative mode with 3 duo events!
            The proofs will be revealed to you on the day of the event., so put
            your team cohesion to work 💪 <br />
            <br />
            The event will start at 7 p.m. to ensure an evening full of chills
            and fun ☠️ <br />
            <br />
            We are waiting for you for this event between communities! <br />
            <br />
            How can I register? <Link to="/contact">
              {" "}
              Go to the Contact
            </Link>{" "}
            <br />
            <br />
            tab to send us by email : - Your Username - Your Viewer's Username -
            Your networks (Twitter and Discord) - Have you ever participated in
            a Traker eSport event ? We are waiting for you 📽️
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recruitment;
