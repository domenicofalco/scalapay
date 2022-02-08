import React from "react";
import { cleanup, render } from "@testing-library/react";
import Paragraph from "../";

afterEach(cleanup);

describe("atoms => Paragraph", () => {
  it("It should match snapshot", () => {
    const { asFragment } = render(<Paragraph>Paragraph</Paragraph>);
    expect(asFragment()).toMatchSnapshot();
  });
});
