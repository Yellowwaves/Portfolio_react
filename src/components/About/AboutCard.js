import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Je m'appelle <span className="purple">Elouan Teissere</span>.
            <br /> Je suis en 4ème année en école d'ingénieur à l'ISEN Brest, spécialisé en cybersécurité.
            <br />
            Je suis en recherche d'un stage de deux mois à partir de Janvier 2024 en développement web ou en cybersécurité.
            <br />
            En dehors de mes études, j'adore voyager, essayer d'apprendre de nouvelles compétences et faire du kayak.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            Toujours à la recherche de nouvelles aventures !{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
