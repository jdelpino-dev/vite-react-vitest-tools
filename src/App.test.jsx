// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const h1 = screen.getByText("Vite React Template with Tooling");
  expect(h1).toBeInTheDocument();
});
