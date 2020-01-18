import React from "react";
import styled from "styled-components";
import { Row } from "../styled-components/Flex";

const SocialIcon = styled.img`
  height: 2rem;
  margin: 0.25rem;
`;

const Footer = () => {
  return (
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
  );
};

export default Footer;
