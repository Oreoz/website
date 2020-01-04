import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

it("renders my name", () => {
  const { getByText } = render(<App />);

  expect(getByText("Jean-Philippe Roy")).toBeInTheDocument();
});
