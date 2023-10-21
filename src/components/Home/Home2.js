import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple">PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Passionné d'informatique depuis mon plus jeune âge, j'ai décidé de me lancer dans une formation d'ingénieur à L'ISEN Brest. <br />
              <br />
              <br />Je suis à l'aise dans des langages tels que
              <i>
                <b className="purple"> C, PHP et Python</b> mais bien d'autres encore.
              </i>
              <br />
              <br />
              J'aime également me lancer dans de petits projets web en utilisant
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques et des frameworks modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Symfony</b>.
              <br />
              <br />
              </i>
              Cependant mon domaine d'intérêt est surtout la <b className="purple">Cybersécurité</b> côté <b className="purple">Red Team</b>.
              <br />
            </p>
            {/* <p>
              J'aime particulièrement la cybersécurité côté <span className="purple">Red Team</span> et je passe du temps sur <span className="purple">RootMe</span>.
            </p> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/votre-nom-github"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/votre-nom-twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/votre-nom-linkedin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/votre-nom-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
