import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const ExternalLink: FC<Props> = ({ children, ...passthrough }) => {
  return (
    <a {...passthrough} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
