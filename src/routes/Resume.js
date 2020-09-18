import React from "react";
import Skill from "../components/Skill";
import Container from "../styled-components/Container";
import { Title } from "../styled-components/Headings";

export default function Resume() {
  return (
    <Container>
      <Title>Resume</Title>

      <Skill className="mb-2" name="React" level={8} />
      <Skill className="mb-2" name="JavaScript" level={9} />
      <Skill className="mb-2" name="CSS" level={8} />
      <Skill className="mb-2" name="Kotlin" level={6} />
    </Container>
  );
}
