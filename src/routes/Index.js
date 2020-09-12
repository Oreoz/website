import React from "react";
import RotatingText from "react-rotating-text";
import Bio from "../components/Bio";
import Socials from "../components/Socials";
import Roles from "../data/roles";
import Avatar from "../styled-components/Avatar";
import Container from "../styled-components/Container";
import { Subtitle, Title } from "../styled-components/Headings";

export default function Index() {
  return (
    <Container alignItems="center">
      <Avatar data-test-id="avatar" src="assets/me.jpg" alt="that's me" />

      <Title>Jean-Philippe Roy</Title>

      <Subtitle>
        <RotatingText items={Roles} />
      </Subtitle>

      <Bio />

      <Socials />
    </Container>
  );
}
