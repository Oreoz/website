import React, { FC } from "react";
import ExternalLink from "./ExternalLink";

const Socials: FC = () => {
  return (
    <div className="flex mt-4">
      <ExternalLink
        data-test-id="linkedin"
        href="https://www.linkedin.com/in/jean-philippe-roy-64918658"
      >
        <span
          role="img"
          aria-label="LinkedIn"
          className="social-shapes text-4xl mx-1"
        >
          k
        </span>
      </ExternalLink>

      <ExternalLink data-test-id="github" href="https://github.com/Oreoz">
        <span
          role="img"
          aria-label="GitHub"
          className="social-shapes text-4xl mx-1"
        >
          Y
        </span>
      </ExternalLink>
    </div>
  );
};

export default Socials;
