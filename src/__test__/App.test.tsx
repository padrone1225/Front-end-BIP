import { render } from "@testing-library/react";
import React from "react";
// import * as from "@types/jest";
import App from "../App";

const testIds = {};

const renderApp = () => render(<App />);

// @ts-ignore
it("Initial render correctly", () => {
  const { queryAllByTestId } = renderApp();
  // const textelement = queryAllByTestId("app-link");
  // console.log("TEST--------->", textelement[0].textContent, typeof textelement);
});
