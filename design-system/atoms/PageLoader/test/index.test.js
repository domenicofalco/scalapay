import React from "react";
import { cleanup, render } from "@testing-library/react";
import PageLoader from "../";

afterEach(cleanup);

describe("atoms => PageLoader", () => {
  it("It should match snapshot", () => {
    const { asFragment } = render(<PageLoader>PageLoader</PageLoader>);
    expect(asFragment()).toMatchSnapshot();
  });
});
