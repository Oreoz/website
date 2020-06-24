import React, { useState } from "react";
import RotatingText from "react-rotating-text";
import "./App.css";
import Avatar from "./styled-components/Avatar";
import Container from "./styled-components/Container";
import { Row } from "./styled-components/Flex";
import { Subtitle, Title } from "./styled-components/Headings";
import SocialIcon from "./styled-components/SocialIcon";

function App() {
  const [roles] = useState([
    "Dad 👶",
    "Software Engineer 💻",
    "Cyclist 🚴‍♂️",
    "Sneakerhead 👟",
    "Metalhead 🤟",
  ]);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar data-test-id="avatar" src="assets/me.jpg" alt="avatar" />

        <Title>Jean-Philippe Roy</Title>

        <Subtitle>
          <RotatingText items={roles} /> from Montréal.
        </Subtitle>

        <Row justifyContent="center" mt={2}>
          <a href="https://www.linkedin.com/in/jean-philippe-roy-64918658/">
            <SocialIcon
              data-test-id="linkedin"
              src="assets/linkedin.svg"
              alt="LinkedIn"
            />
          </a>

          <a href="https://twitter.com/OhNoesMyOreos">
            <SocialIcon
              data-test-id="twitter"
              src="assets/twitter.svg"
              alt="Twitter"
            />
          </a>

          <a href="https://github.com/Oreoz">
            <SocialIcon
              data-test-id="github"
              src="assets/github.svg"
              alt="Github"
            />
          </a>
        </Row>
      </div>
    </Container>
  );
}

export default App;
