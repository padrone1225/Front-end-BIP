import { render, screen } from "@testing-library/react";
import Landing from "../Landing/Landing";

const renderApp = () => render(<Landing />);

// @ts-ignore
it("Landing Page test", () => {
  renderApp();
  const ab = screen.getByText(/The all-in-one licensing solution/i);
  // @ts-ignore
  expect(ab).toBeTruthy();
  // @ts-ignore
  expect(screen.getByText(/How it works?/i));
});
