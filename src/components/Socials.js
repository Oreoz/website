import React from "react";
import Anchor from "./Anchor";
import { Row } from "../styled-components/Flex";
import SocialIcon from "../styled-components/SocialIcon";

const Socials = () => (
  <Row justifyContent="center" style={{ marginTop: 16 }}>
    <Anchor href="https://www.linkedin.com/in/jean-philippe-roy-64918658">
      <SocialIcon
        data-test-id="linkedin"
        src="assets/linkedin.svg"
        alt="LinkedIn"
      />
    </Anchor>

    <Anchor href="https://twitter.com/OhNoesMyOreos">
      <SocialIcon
        data-test-id="twitter"
        src="assets/twitter.svg"
        alt="Twitter"
      />
    </Anchor>

    <Anchor href="https://github.com/Oreoz">
      <SocialIcon data-test-id="github" src="assets/github.svg" alt="Github" />
    </Anchor>
  </Row>
);

export default Socials;
