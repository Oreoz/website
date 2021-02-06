import React, { FC } from "react";
import Bio from "../components/Bio";
import Portrait from "../components/Portrait";
import Socials from "../components/Socials";
import Title from "../components/Title";
import Nav from "../components/Nav";

const ThemeTransition = {
  transitionDuration: "0.5s",
  transitionProperty: "background-color, color",
  transitionTimingFunction: "linear",
};

const Index: FC = () => {
  return (
    <div
      className="dark:bg-gray-900 dark:text-gray-50 min-h-screen"
      style={{ ...ThemeTransition }}
    >
      <Nav />

      <div className="flex flex-col items-center max-w-screen-md mx-auto p-6">
        <Portrait />

        <Title />

        <Bio />

        <Socials />
      </div>
    </div>
  );
};

export default Index;
