import React from "react";
import { Row } from "./styled-components/Flex";
import SocialIcon from "./styled-components/SocialIcon";

const Socials = () => (
  <Row justifyContent="center" style={{ marginTop: 16 }}>
    <a
      href="https://www.linkedin.com/in/jean-philippe-roy-64918658/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon
        data-test-id="linkedin"
        src="assets/linkedin.svg"
        alt="LinkedIn"
      />
    </a>
    <a
      href="https://twitter.com/OhNoesMyOreos"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon
        data-test-id="twitter"
        src="assets/twitter.svg"
        alt="Twitter"
      />
    </a>
    <a
      href="https://github.com/Oreoz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon data-test-id="github" src="assets/github.svg" alt="Github" />
    </a>
  </Row>
);

export default Socials;
