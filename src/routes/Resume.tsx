import React, { FC } from "react";
import Skill from "../components/Skill";

const Resume: FC = () => {
  return (
    <>
      <h1>Resume</h1>

      <Skill className="w-full mb-2" name="React" level={8} />
      <Skill className="w-full mb-2" name="JavaScript" level={9} />
      <Skill className="w-full mb-2" name="CSS" level={8} />
      <Skill className="w-full mb-2" name="Kotlin" level={6} />
    </>
  );
};

export default Resume;
