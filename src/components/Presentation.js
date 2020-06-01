import React, { useState } from "react";
import RotatingText from "react-rotating-text";
import Avatar from "../styled-components/Avatar";
import { Column } from "../styled-components/Flex";
import FlexSwitch from "../styled-components/FlexSwitch";
import Gutters from "../styled-components/Gutters";
import { Subtitle, Title } from "../styled-components/Headings";

const Presentation = () => {
  const [roles] = useState([
    "Dad 👶",
    "Cyclist 🚴‍♂️",
    "Sneakerhead 👟",
    "Software Engineer 💻",
  ]);

  return (
    <>
      <Gutters>
        <FlexSwitch
          initial={{ direction: "column", alignItems: "center" }}
          destination={{ direction: "row", justifyContent: "space-evenly" }}
          breakpoint={768}
        >
          <Column>
            <Title>Jean-Philippe Roy</Title>
            <Subtitle>
              <RotatingText items={roles} /> from Montréal.
            </Subtitle>
          </Column>

          <Avatar data-test-id="avatar" src="assets/me.jpg" alt="avatar" />
        </FlexSwitch>
      </Gutters>
    </>
  );
};

export default Presentation;
