import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test("renders", () => {
  render(<App />);
  expect(screen.getByLabelText("Total")).toHaveTextContent("0");
});
