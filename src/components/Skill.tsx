import React, { FC, HTMLAttributes, useState } from "react";
import useOnRender from "../hooks/useOnRender";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  level?: number;
}

const Skill: FC<Props> = ({ name, level = 0, ...passthrough }) => {
  const [skillLevel, setSkillLevel] = useState(0);

  useOnRender(() => setSkillLevel(level));

  return (
    <div {...passthrough}>
      <label className="mb-1">{name}</label>

      <div className="h-6 bg-gray-300">
        <div
          className="h-full bg-orange-300 transition-all ease-linear duration-1000"
          style={{
            width: `${skillLevel * 10}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Skill;
