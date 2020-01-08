import React from "react";
import RotatingText from "react-rotating-text";
import styled from "styled-components";
import "./App.css";
import Container from "./components/Container";
import { Subtitle, Title } from "./components/Headings";

const Avatar = styled.img`
  border-radius: 50%;
  width: 300px;
`;

const SocialIcon = styled.img`
  height: 2rem;
  margin: 0.25rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 769px) {
    margin-bottom: 0;
    padding: 0;
    margin-right: 2rem;
    min-width: 380px;
  }
`;

const PresentationSection = styled.section`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    margin-top: 5rem;
  }
`;

const SocialSection = styled.section`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const roles = [
  "Dad 👶",
  "Cyclist 🚴‍♂️",
  "Sneakerhead 👟",
  "Software Engineer 💻"
];

function App() {
  return (
    <Container>
      <PresentationSection>
        <Details>
          <Title>Jean-Philippe Roy</Title>
          <Subtitle>
            <RotatingText items={roles} /> from Montréal.
          </Subtitle>
        </Details>

        <Avatar data-test-id="avatar" src="assets/me.jpg" />
      </PresentationSection>

      <SocialSection>
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
      </SocialSection>
    </Container>
  );
}

export default App;
