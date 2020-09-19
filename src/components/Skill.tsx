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

      <div className="flex items-center">
        <span role="img" aria-label="weak">
          🔨
        </span>

        <div className="w-full h-3 bg-gray-400 mx-1 my-2">
          <div
            className="h-full bg-teal-500 transition-all ease-linear duration-1000"
            style={{
              width: `${skillLevel * 10}%`,
            }}
          />
        </div>

        <span role="img" aria-label="strong">
          💪
        </span>
      </div>
    </div>
  );
};

export default Skill;
