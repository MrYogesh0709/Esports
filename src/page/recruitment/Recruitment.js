import React from "react";
import "./recruitments.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import r2 from "../../images/recuirment.jpg";

const Recruitment = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="recuirment">
        <img src={r2} alt="recuirment" />
        <h1>Recruitment</h1>
        <h4>must visit this link for recuirment </h4>
        <h6>
          <a
            href="https://linktr.ee/r1_esport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="recuirment-btn">
              https://linktr.ee/r1_esport
            </button>
          </a>
        </h6>
      </main>
      <Footer />
    </>
  );
};

export default Recruitment;
