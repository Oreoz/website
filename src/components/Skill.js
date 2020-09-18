import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  height: 20px;
  background: #d1d1d1;
`;

const SkillFill = styled.div`
  height: 100%;
  background: #ffbf7a;
  width: ${(props) => `${props.skill * 10}%`};
  transition: width 1s linear;
`;

export default function Skill({ name, level = 0, ...passthrough }) {
  const [skillLevel, setSkillLevel] = useState(0);

  useEffect(() => setSkillLevel(level), []);

  return (
    <div {...passthrough}>
      <div className="mb-1">{name}</div>

      <SkillContainer>
        <SkillFill skill={skillLevel} />
      </SkillContainer>
    </div>
  );
}
