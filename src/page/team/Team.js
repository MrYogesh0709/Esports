import React from "react";
import "./team.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const Team = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="recuirment">
        <div className="recuirment-container">
          <h1>Our Team</h1>
        </div>
      </section>
      <div className="section1">
        <div className="president">
          <h2>president</h2>
          <div className="president-all">
            <div className="p1">
              <div className="p1name">R1 tatane</div>
              <div className="p1line"></div>
              <div className="p1image">
                <img src="" alt="R1 tatane" className="team-image" />
              </div>
              <div className="p1line"></div>
              <div className="p1info">
                Je me nomme Ethan 16 ans fondateur et président R1 ESPORT.
                Actuellement en formation système numérique, je compte à
                l’avenir développer au maximum mon savoir dans le vaste domaine
                de l’informatique. Cela fait maintenant 3 ans que je prends part
                à différents projets au sein de l'eSport. Que ce soit en tant
                que joueur, manager ou bien directeur, j’ai pu acquérir
                plusieurs expériences au fur et à mesure de ma progression et je
                compte bien mettre à profit mon expérience via le projet R1.
              </div>
              <div className="p1line2"></div>
              <div className="p1links">
                <a
                  href="https://twitter.com/r1_tatane?s=21&t=Z4qcMPOo1IHuqthGOAxVlw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://trakeresport.fr/static/img/logo_twitter.png"
                    alt="twitter"
                    className="logo-reseaux"
                  />
                </a>
              </div>
            </div>
            <div className="p1">
              <div className="p1name">R1 Txmmm</div>
              <div className="p1line"></div>
              <div className="p1image">
                <img src="" alt="R1 Txmmm" className="team-image" />
              </div>
              <div className="p1line"></div>
              <div className="p1info">
                Tom, 21 ans, président de la R1 depuis plusieurs mois aux côtés
                de tatane. Je travaille dans l'administration. Co president
              </div>
              <div className="p1line2"></div>
              <div className="p1links">
                <a
                  href="https://twitter.com/r1_tatane?s=21&t=Z4qcMPOo1IHuqthGOAxVlw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://trakeresport.fr/static/img/logo_twitter.png"
                    alt="twitter"
                    className="logo-reseaux"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
