import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLAnchorElement> {}

const Anchor: FC<Props> = ({ children, ...passthrough }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...passthrough}>
      {children}
    </a>
  );
};

export default Anchor;
