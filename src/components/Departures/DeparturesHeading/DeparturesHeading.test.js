import React from "react";
import { render } from "@testing-library/react";
import DeparturesHeading from "./DeparturesHeading";

describe("DeparturesHeading tests", () => {
  it("should render", () => {
    expect(render(<DeparturesHeading />)).toBeTruthy();
  });
});
