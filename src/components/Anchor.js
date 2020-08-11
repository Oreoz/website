import React from "react";

const Anchor = ({ children, ...passthrough }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...passthrough}>
      {children}
    </a>
  );
};

export default Anchor;
