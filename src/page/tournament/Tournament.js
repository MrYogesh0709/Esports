import React from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import r1 from "../../images/R1.jpg";
import tournamet from "../../images/tournament.jpg";
import "./tournament.css";
const Tournament = () => {
  return (
    <>
      <Navbar />
      <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div>
      <div className="section">
        <div className="tournament">
          <h2 className="h2-tournament">Tournament</h2>
          <img src={tournamet} alt="tournament" />
          <p className="para-tournament">
            En ce temps de calme sur le jeu fortnite, R1 souhaite proposer une
            activité histoire de divertir la communauté.
            <br />
            <br />
            Le vendredi 2 décembre 2022 à 19h00 aura lieu la R1 Zone Wars Cup,
            une compétition en solo ouverte à tous. Cette activité a pour but de
            divertir la communauté (cela peut aussi servir d'entraînement).
            <br />
            <br />
            L’activité se déroulera dans le mode créatif via une map zone Wars
            faite par l’un de nos mappeurs, afin de déterminer le gagnant. 10
            manches succéderont les unes après les autres et un classement final
            sera défini. <br />
            <br />
            Qui dit event dit récompense pour les gagnants. 20 euros de
            CashPrise sera distribué au 3 premiers de l'activité. 1er = 10€ |
            2ème = 6€ | 3ème = 4€ <br />
            <br />
            L’évènement sera bien évidemment cast par l’un de nos caster. Nous
            vous invitons donc à nous envoyer vos chaines Twitch dans votre
            formulaire d’inscription. <br />
            <br />
            Malheureusement les places sont limitées 32 places libres.
            <br />
            <br />
            Comment puis-je m’inscrire ? <br />
            <br />
            Direction l’onglet Contact afin de nous envoyer un mail : <br />
            <br />- Votre pseudo épique <br />- Votre chaîne Twitch (Facultatif)
            <br />- Avez-vous déjà participé à l’un de nos évènements ?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tournament;
