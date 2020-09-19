import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  company: string;
  title: string;
}

const Job: FC<Props> = ({
  company,
  children,
  title,
  className,
  ...passtrough
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`} {...passtrough}>
      <h3 className="my-0 font-normal">{title}</h3>
      <h4 className="my-0 font-thin">{company}</h4>

      {children}
    </div>
  );
};

export default Job;
