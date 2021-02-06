import React, { FC } from "react";

const Portrait: FC = () => {
  return (
    <img
      className="rounded-full w-50 max-w-300 max-w-xs w-2/3 mb-4"
      data-test-id="avatar"
      src="assets/me.jpg"
      alt="portrait"
    />
  );
};

export default Portrait;
