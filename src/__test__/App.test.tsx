import { render } from "@testing-library/react";
import "@types/jest";
import App from "../App";

const testIds = {};

const renderApp = () => render(<App />);

test("Initial render correctly", () => {
  const { queryAllByTestId } = renderApp();
  const textelement = queryAllByTestId("app-link");
  console.log("TEST--------->", textelement[0].textContent, typeof textelement);
});
