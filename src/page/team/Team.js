import React from "react";
import "./team.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import lose from "../../images/fortnite/lose.jpg";
import urkan from "../../images/fortnite/urkan.jpg";
const Team = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="team">
        <div className="team-container">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fortnite">
        <h2>Fortnite</h2>

        <div className="fortnite-all">
          <div className="p1">
            <div className="p1name"> R1 Izzi</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src="" alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Bonjour je m'appelle Ilian j'ai 14 ans je suis joueur chez R1 j'ai
              décidé de rejoindre R1 car c'est une team vraiment active et
              sérieuse mes objectifs dans l'eSport sont de devenir pro.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://twitter.com/izziftn?s=21&t=Z4qcMPOo1IHuqthGOAxVlw "
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
                href="https://twitch.tv/izziftn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                  alt="twitch"
                  className="logo-reseaux"
                />
              </a>
            </div>
          </div>

          <div className="p1">
            <div className="p1name">R1 Lose</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src="" alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Bonjour, je m'appelle Lorenzo (alias Lose) et j'ai 18ans. Cela
              fait 3,4 mois environ que je suis joueur chez R1. J'ai décidé de
              rejoindre R1 qui m'a l'air d'être un projet sur et je compte tout
              faire pour qu'on atteigne tous ensemble les sommets de l'Esport.
              Mon objectif est de faire ma place sur la scène compétitive de
              fortnite.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://twitter.com/losev2v?s=21&t=Z4qcMPOo1IHuqthGOAxVlw"
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
                href="https://twitch.tv/jllose"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                  alt="twitch"
                  className="logo-reseaux"
                />
              </a>
            </div>
          </div>

          <div className="p1">
            <div className="p1name">R1 Daabz</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src="" alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Bonjour, je m'appelle Maxime et j'ai 15 ans. Cela fait 1 mois que
              je suis joueur chez R1. J'ai déjà été dans d'autres structures en
              tant que joueur, mais là j'ai décidé de rejoindre R1 qui m'a l'air
              d'être un projet sur. Je compte tout faire pour qu'on atteigne
              tous ensemble les sommets de l'Esport. Je ne sais pas ce que je
              veux faire plus tard, mais je sais que je veux vivre de ma
              passion.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://twitter.com/daabzfn?s=21&t=Z4qcMPOo1IHuqthGOAxVlw "
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
                href="https://twitch.tv/daabzfn "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                  alt="twitch"
                  className="logo-reseaux"
                />
              </a>
            </div>
          </div>

          <div className="p1">
            <div className="p1name">R1 Gifted</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={lose} alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Salut je m'appelle Arman sous le pseudo de Gifted j'ai 14 ans et
              j'ai rejoint la R1 en tant que joueur. Je joue à fortnite depuis
              sa sortie et j'ai direct accroché au mode compétitif. Mes
              objectifs dans l'eSport sont, devenir pro et réussir à gagner ma
              vie grâce à ça. Mes objectifs dans la R1, Participer à des Lan me
              faire évoluer dans de bonnes conditions et pousser la structure
              vers le haut.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://twitter.com/giftedd9?s=21&t=Z4qcMPOo1IHuqthGOAxVlw "
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
                href="https://twitch.tv/giftedqr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                  alt="twitch"
                  className="logo-reseaux"
                />
              </a>
            </div>
          </div>

          <div className="p1">
            <div className="p1name">R1 Prince_Urkans</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={urkan} alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Kentin brejaud 20 ans, je suis rentré dans la R1 esport pour
              pouvoir développer mon cast et mon expérience de streamer au sein
              d’une équipe organisée, bien cadré et professionnel. Mes objectifs
              dans l’avenir sont performer en tant que streamer chez la R1 et
              performer dans le domaine du cast.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://instagram.com/urkanss?igshid=YmMyMTA2M2Y= "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_insta_blanc.png"
                  alt="instagram"
                  className="logo-reseaux"
                />
              </a>
              <a
                href="https://twitch.tv/prince_urkans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_twitch_bpanc.png"
                  alt="twitch"
                  className="logo-reseaux"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
