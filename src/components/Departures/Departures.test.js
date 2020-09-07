import React from "./node_modules/react";
import { render } from "./node_modules/@testing-library/react";
import departures from "./departures";

describe("departures tests", () => {
  it("should render", () => {
    expect(render(<departures />)).toBeTruthy();
  });
});
