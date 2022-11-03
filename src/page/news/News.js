import React from "react";
import "./news.css";
import r1 from "../../images/R1.jpg";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const News = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div>
      <main className="news">
        <h1>news</h1>
        <p>
          Je m’appelle <b> Manon Chauvin</b>, j’ai 20 ans et je suis graphiste
          professionnelle et expérimentée, possédant mon auto-entreprise du nom
          de PubliGraphique ayant 6 ans d’expérience dans le domaine du
          graphisme. Spécialisée dans la conception d’identité visuelle / charte
          graphique, je réalise aussi toutes sorte de supports/outils de
          communication Print & Web. J’ai réalisé au cours des 6 dernières
          années des projets pour des clients professionnel(le)s tels que la
          conception de leur identité, visuelle pour se démarquer des autres,
          leurs affiches, flyers/ tracts pour la visibilité de leurs
          services/produits, des vignettes web, et bien d’autres ! Directrice
          AudioVisuel au sein de l’équipe <b>e-sport R1</b> , ce rôle est
          important car je m’occupe de recruter des personnes dans le pôle
          AudioVisuel tels que des graphistes monteur etc… Etant expérimentée et
          professionnelle, je donnerai des conseils pour permettre aux
          graphistes de s’améliorer et mieux gérer les demandes. Mon rôle est
          aussi bien de gérer/organiser les projets des joueurs, streamer, etc
          de la team pour donner du travail au graphistes et monteur en fonction
          de la demande.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default News;
