import React from "react";

export default function Anchor({ children, ...passthrough }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...passthrough}>
      {children}
    </a>
  );
}
