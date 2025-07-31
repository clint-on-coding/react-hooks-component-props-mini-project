import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  
  // Check the top-level .App container
  expect(container.querySelector(".App")).toBeInTheDocument();

  // Check if <header> is rendered by Header component
  expect(container.querySelector("header")).toBeInTheDocument();

  // Check if <aside> is rendered by About component
  expect(container.querySelector("aside")).toBeInTheDocument();

  // Check if <main> is rendered by ArticleList component
  expect(container.querySelector("main")).toBeInTheDocument();
});

