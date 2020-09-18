import React, { FC } from "react";

const Socials: FC = () => {
  return (
    <div className="content-center mt-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jean-philippe-roy-64918658"
      >
        <img
          className="h-8 mx-1"
          data-test-id="linkedin"
          src="assets/linkedin.svg"
          alt="LinkedIn"
        />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/OhNoesMyOreos"
      >
        <img
          className="h-8 mx-1"
          data-test-id="twitter"
          src="assets/twitter.svg"
          alt="Twitter"
        />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Oreoz"
      >
        <img
          className="h-8 mx-1"
          data-test-id="github"
          src="assets/github.svg"
          alt="Github"
        />
      </a>
    </div>
  );
};

export default Socials;
