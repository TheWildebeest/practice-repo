import React from "react";
import { render } from "@testing-library/react";
import DepartureListing from "./DepartureListing";

describe("DepartureListing tests", () => {
  it("should render", () => {
    expect(render(<DepartureListing />)).toBeTruthy();
  });
});
