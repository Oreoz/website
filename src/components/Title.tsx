import React, { FC } from "react";
import RotatingText from "react-rotating-text";

const Title: FC = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl text-center">Jean-Philippe Roy</h1>

      <RotatingText
        className="font-medium text-lg"
        items={[
          "Dad 👶",
          "Software Engineer 💻",
          "Cyclist 🚴‍♂️",
          "Sneakerhead 👟",
          "Metalhead 🤟",
        ]}
      />
    </>
  );
};

export default Title;
