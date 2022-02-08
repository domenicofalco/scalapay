import React from "react";
import { cleanup, render } from "@testing-library/react";
import Button from "../";

afterEach(cleanup);

describe("atoms => Button", () => {
  it("It should render 'primary' variant as default prop is missing or wrong", () => {
    const { getByText } = render(<Button type="button">Button</Button>);
    const component = getByText(/Button/i);
    expect(component.dataset.variant).toBe("primary");
  });

  it("It should render 'primary' variant", () => {
    const { getByText, asFragment } = render(
      <Button variant="primary" type="button">
        Button
      </Button>
    );
    const component = getByText(/Button/i);
    expect(component.dataset.variant).toBe("primary");
    expect(asFragment()).toMatchSnapshot();
  });

  it("It should render 'secondary' variant", () => {
    const { getByText } = render(
      <Button variant="secondary" type="button">
        Button
      </Button>
    );
    const component = getByText(/Button/i);
    expect(component.dataset.variant).toBe("secondary");
  });

  it("It should render 'roundIcon' variant", () => {
    const { getByText } = render(
      <Button variant="roundIcon" type="button">
        Button
      </Button>
    );
    const component = getByText(/Button/i);
    expect(component.dataset.variant).toBe("roundIcon");
  });
});
