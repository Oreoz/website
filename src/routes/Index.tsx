import React, { FC } from "react";
import RotatingText from "react-rotating-text";
import Bio from "../components/Bio";
import Socials from "../components/Socials";
import Roles from "../data/roles";
import { Subtitle, Title } from "../styled-components/Headings";

const Index: FC = () => {
  return (
    <>
      <img
        className="rounded-full w-50 max-w-300 max-w-xs w-2/3 mb-4"
        data-test-id="avatar"
        src="assets/me.jpg"
        alt="that's me"
      />

      <Title>Jean-Philippe Roy</Title>

      <Subtitle>
        <RotatingText items={Roles} />
      </Subtitle>

      <Bio />

      <Socials />
    </>
  );
};

export default Index;
