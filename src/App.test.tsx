import { render, screen } from "@testing-library/react";
import App from "./App";
// import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/CSS PRACTICE/i);
  expect(linkElement).toBeInTheDocument();
  //expect(true).toBeTruthy();
});
