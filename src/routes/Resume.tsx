import React, { FC } from "react";
import Skill from "../components/Skill";
import Job from "./../components/Job";

const Resume: FC = () => {
  return (
    <>
      <h1 className="text-center">Resume</h1>

      <h2 className="w-full text-left mb-2 mt-0 font-normal">Skills</h2>

      <div className="w-full flex flex-col mb-4">
        <Skill className="w-full mb-2" name="React" level={8.8} />
        <Skill className="w-full mb-2" name="TypeScript" level={8.2} />
        <Skill className="w-full mb-2" name="CSS" level={7.6} />
        <Skill className="w-full mb-2" name="GraphQL" level={7.0} />
        <Skill className="w-full mb-2" name="Node" level={6.9} />
      </div>

      <h2 className="w-full text-left mb-2 mt-0 font-normal">Experiences</h2>

      <Job
        className="mb-4"
        company="Intact Financial Corporation"
        title="Principal Developer"
      />

      <Job className="mb-4" company="Bell" title="Tech Lead" />

      <Job className="mb-4" company="Morneau Shepell" title="Data Analyst" />
    </>
  );
};

export default Resume;
