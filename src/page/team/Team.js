import React from "react";
import "./team.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import lose from "../../images/fortnite/lose.jpg";
import urkan from "../../images/fortnite/urkan.jpg";
import tatane from "../../images/president/r1 tatane.jpg";
import txmm from "../../images/president/jiseh.png";
import izzi from "../../images/fortnite/Izzi.png";
import dabbz from "../../images/fortnite/daabz.jpg";
import gifted from "../../images/fortnite/grfted.jpg";
import manon from "../../images/manon.jpg";
import romu from "../../images/communaction/romu.jpg";
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

      <div className="president">
        <h2>president</h2>

        <div className="president-all">
          <div className="p1">
            <div className="p1name">R1 tatane</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={tatane} alt="R1 tatane" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Je me nomme Ethan 16 ans fondateur et président R1 ESPORT.
              Actuellement en formation système numérique, je compte à l’avenir
              développer au maximum mon savoir dans le vaste domaine de
              l’informatique. Cela fait maintenant 3 ans que je prends part à
              différents projets au sein de l'eSport. Que ce soit en tant que
              joueur, manager ou bien directeur, j’ai pu acquérir plusieurs
              expériences au fur et à mesure de ma progression et je compte bien
              mettre à profit mon expérience via le projet R1.
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
              <img src={txmm} alt="R1 Txmmm" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Tom, 21 ans, président de la R1 depuis plusieurs mois aux côtés de
              tatane. Je travaille dans l'administration. Co president
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

      {/* direcation */}

      <div className="evenementiel">
        <h2>direaction</h2>
        <div className="evenementiel-all">
          <div className="evenementiel1">
            <div className="p1name">Skiinya</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src="" alt="R1 tatane" className="manon-image" />
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
            {/* <div className="p1links">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* communication */}

      <div className="president">
        <h2>Commmunication</h2>

        <div className="president-all">
          <div className="p1">
            <div className="p1name">R1 Romu Publicitaire</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={romu} alt="Romu" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              Je me nome Romuald, 19 ans Publicitaire chez R1 eSport. Partager
              au personne passionné d’eSport et de compétition R1 eSport est
              agréable pour apprendre et évoluer. Je me charge de tout ce qui
              est publicitaire par rapport à la structure que se soit via les
              réseaux ou quelque fois irl. Mon objectif dans l'avenir en tant
              que R1, est de faire grandir cette structure au niveau de la
              communauté et du personnel.
            </div>
            <div className="p1line2"></div>
            {/* <div className="p1links">
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
            </div> */}
          </div>
          <div className="p1">
            <div className="p1name">NLT</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src="" alt="NLT" className="team-image" />
            </div>
            <div className="p1line"></div>
            <div className="p1info">
              {/* Tom, 21 ans, président de la R1 depuis plusieurs mois aux côtés de
              tatane. Je travaille dans l'administration. Co president */}
            </div>
            <div className="p1line2"></div>
            {/* <div className="p1links">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* evenementiel */}

      <div className="evenementiel">
        <h2>Evenementiel</h2>
        <div className="evenementiel-all">
          <div className="evenementiel1">
            <div className="p1name">R1 Prince_Urkans</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={urkan} alt="R1 tatane" className="manon-image" />
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

      {/* fortnite */}

      <div className="fortnite">
        <h2>Fortnite</h2>

        <div className="fortnite-all">
          <div className="p1">
            <div className="p1name"> R1 Izzi</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={izzi} alt="R1 Izzi" className="team-image" />
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
              <img src={lose} alt="R1 lose" className="team-image" />
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
              <img src={dabbz} alt="R1 dabbz" className="team-image" />
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
              <img src={gifted} alt="R1 Gifted" className="team-image" />
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
        </div>
      </div>

      {/* audio visueal */}

      <div className="Directrice-AudioVisuel">
        <h2>Directrice AudioVisuel</h2>
        <div className="audio-all">
          <div className="audio">
            <div className="p1name">Manon Chauvin</div>
            <div className="p1line"></div>
            <div className="p1image">
              <img src={manon} alt="manon chauvin" className="manon-image" />
            </div>
            <div className="p1line"></div>
            <div>
              Je m’appelle Manon Chauvin, j’ai 20 ans et je suis graphiste
              professionnelle et expérimentée, possédant mon auto-entreprise du
              nom de PubliGraphique ayant 6 ans d’expérience dans le domaine du
              graphisme. Spécialisée dans la conception d’identité visuelle /
              charte graphique, je réalise aussi toutes sorte de supports/outils
              de communication Print & Web. J’ai réalisé au cours des 6
              dernières années des projets pour des clients professionnel(le)s
              tels que la conception de leur identité, visuelle pour se
              démarquer des autres, leurs affiches, flyers/ tracts pour la
              visibilité de leurs services/produits, des vignettes web, et bien
              d’autres ! Directrice AudioVisuel au sein de l’équipe e-sport R1,
              ce rôle est important car je m’occupe de recruter des personnes
              dans le pôle AudioVisuel tels que des graphistes monteur etc…
              Etant expérimentée et professionnelle, je donnerai des conseils
              pour permettre aux graphistes de s’améliorer et mieux gérer les
              demandes. Mon rôle est aussi bien de gérer/organiser les projets
              des joueurs, streamer, etc de la team pour donner du travail au
              graphistes et monteur en fonction de la demande.
            </div>
            <div className="p1line2"></div>
            <div className="p1links">
              <a
                href="https://twitter.com/publigraphique?s=21&t=IPwILWKvcODeM5hPtLpW5w"
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
                href="https://publigraphique.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png"
                  alt="publicgraphicque"
                  className="logo-reseaux"
                />
              </a>
              <a
                href="https://vm.tiktok.com/ZMNPcPJpA/?k=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://trakeresport.fr/static/img/logo_tiktok.png"
                  alt="tiktok"
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
