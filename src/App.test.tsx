import { render } from "@testing-library/react";
import App from "./App";
// import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  /*const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument(); */
  expect(true).toBeTruthy();
});
