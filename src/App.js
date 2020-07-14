import React, { useState } from "react";
import RotatingText from "react-rotating-text";
import "./App.css";
import Socials from "./Socials";
import Avatar from "./styled-components/Avatar";
import Container from "./styled-components/Container";
import { Column } from "./styled-components/Flex";
import { Subtitle, Title } from "./styled-components/Headings";
import Paragraph from "./styled-components/Paragraph";

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
        <Avatar data-test-id="avatar" src="assets/me.jpg" alt="that's me" />

        <Title>Jean-Philippe Roy</Title>

        <Subtitle>
          <RotatingText items={roles} />
        </Subtitle>

        <Column style={{ maxWidth: 750, marginTop: 16 }}>
          <Paragraph data-test-id="paragraph-1">
            I am a software engineer, passionate about JavaScript & building
            quality software. Most of my work so far has been done using modern
            JavaScript framworks like Ember.js and React.
          </Paragraph>

          <Paragraph data-test-id="paragraph-2">
            Outside of programming and taking care of my little one. I enjoy
            playing video games, board games, watching movies, listening to
            music, cycling & drinking craft beer with friends.
          </Paragraph>

          <Paragraph data-test-id="paragraph-3">
            If you&apos;re looking to contact me for profesionnal inquiries,
            your best bet would be LinkedIn.
          </Paragraph>
        </Column>

        <Socials />
      </div>
    </Container>
  );
}

export default App;
