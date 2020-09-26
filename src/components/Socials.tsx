import React, { FC } from "react";
import ExternalLink from "./ExternalLink";

const Socials: FC = () => {
  return (
    <div className="flex mt-4">
      <ExternalLink href="https://www.linkedin.com/in/jean-philippe-roy-64918658">
        <img
          className="h-8 mx-1"
          data-test-id="linkedin"
          src="assets/linkedin.svg"
          alt="LinkedIn"
        />
      </ExternalLink>

      <ExternalLink href="https://twitter.com/OhNoesMyOreos">
        <img
          className="h-8 mx-1"
          data-test-id="twitter"
          src="assets/twitter.svg"
          alt="Twitter"
        />
      </ExternalLink>

      <ExternalLink href="https://github.com/Oreoz">
        <img
          className="h-8 mx-1"
          data-test-id="github"
          src="assets/github.svg"
          alt="Github"
        />
      </ExternalLink>
    </div>
  );
};

export default Socials;
