import React, { FC } from "react";
import ThemeSwitch from "../components/ThemeSwitch";

const Nav: FC = () => {
  return (
    <nav className="flex justify-end items-center">
      <ThemeSwitch />
    </nav>
  );
};

export default Nav;
