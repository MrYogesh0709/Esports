import React from "react";
import "./news.css";
// import r1 from "../../images/R1.jpg";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const News = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div> */}
      <main className="news">
        {/* <h1>news</h1> */}
        <h3>en cour de développement</h3>
        {/* <h4>All News will be available here:</h4>
        <div className="news-link">
          <a
            href="https://twitter.com/izziFTN/status/1586092723706003456/photo/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png"
              alt="publicgraphicque"
              className="logo-reseaux"
            />
          </a>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default News;
