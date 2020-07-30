import React from "react";
import RotatingText from "react-rotating-text";
import "./App.css";
import Bio from "./Bio";
import Socials from "./Socials";
import Avatar from "./styled-components/Avatar";
import Container from "./styled-components/Container";
import { Subtitle, Title } from "./styled-components/Headings";

const ROLES = [
  "Dad 👶",
  "Software Engineer 💻",
  "Cyclist 🚴‍♂️",
  "Sneakerhead 👟",
  "Metalhead 🤟",
];

const App = () => {
  return (
    <Container alignItems="center">
      <Avatar data-test-id="avatar" src="assets/me.jpg" alt="that's me" />

      <Title>Jean-Philippe Roy</Title>

      <Subtitle>
        <RotatingText items={ROLES} />
      </Subtitle>

      <Bio />

      <Socials />
    </Container>
  );
};

export default App;
