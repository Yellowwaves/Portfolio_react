import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projetbiw from "../../Assets/Projects/projetbiw.png";
import projetsport from "../../Assets/Projects/projetsport.png";
import projetseisme from "../../Assets/Projects/projetseisme.png";
import projetiti from "../../Assets/Projects/projetiti.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ici, voici la liste de différents projets que j'ai réalisés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetbiw}
              isBlog={false}
              title="Projet Big Data IA"
              description="Projet mêlant big data, IA et web pour créer une interface qui peut prédire la gravité d'un accident de voiture et les trier.
              Utilisations de différents algorithmes de machine learning et de clustering."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetseisme}
              isBlog={false}
              title="Projet de Tri des Séismes"
              description="Projet affichant et triant des séismes en utilisant Symfony pour le backend et React pour le frontend."
              // Ajoutez ici les liens GitHub et de démonstration si disponibles.
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetiti}
              isBlog={false}
              title="Logiciel de Calcul de Chemin en QT"
              description="Logiciel en QT qui permet de calculer un chemin sur la carte de la Bretagne à partir de plusieurs fichiers CSV."
              // Ajoutez ici les liens GitHub et de démonstration si disponibles.
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetsport}
              isBlog={false}
              title="Plateforme de Mise en Relation de Sportifs"
              description="Plateforme en PHP, JavaScript, SQL et HTML qui permet de mettre en relation des sportifs pour créer des équipes de sport."
              // Ajoutez ici les liens GitHub et de démonstration si disponibles.
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
