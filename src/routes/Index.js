import React from "react";
import RotatingText from "react-rotating-text";
import Bio from "../components/Bio";
import Socials from "../components/Socials";
import Avatar from "../styled-components/Avatar";
import Container from "../styled-components/Container";
import { Subtitle, Title } from "../styled-components/Headings";
import UrlShortener from "../components/UrlShortener";

const ROLES = [
  "Dad 👶",
  "Software Engineer 💻",
  "Cyclist 🚴‍♂️",
  "Sneakerhead 👟",
  "Metalhead 🤟",
];

const Index = () => {
  return (
    <Container alignItems="center">
      <Avatar data-test-id="avatar" src="assets/me.jpg" alt="that's me" />

      <Title>Jean-Philippe Roy</Title>

      <Subtitle>
        <RotatingText items={ROLES} />
      </Subtitle>

      <Bio />

      <UrlShortener />

      <Socials />
    </Container>
  );
};

export default Index;
