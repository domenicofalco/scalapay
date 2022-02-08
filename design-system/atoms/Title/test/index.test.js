import React from "react";
import { cleanup, render } from "@testing-library/react";
import Title from "../";

afterEach(cleanup);

describe("atoms => Title", () => {
  it("It should render 'primary' variant as default prop is missing or wrong", () => {
    const { getByText } = render(<Title type="button">Title</Title>);
    const component = getByText(/Title/i);
    expect(component.dataset.variant).toBe("primary");
  });

  it("It should render 'primary' variant", () => {
    const { getByText, asFragment } = render(
      <Title variant="primary" type="button">
        Title
      </Title>
    );
    const component = getByText(/Title/i);
    expect(component.dataset.variant).toBe("primary");
    expect(asFragment()).toMatchSnapshot();
  });

  it("It should render 'secondary' variant", () => {
    const { getByText } = render(
      <Title variant="secondary" type="button">
        Title
      </Title>
    );
    const component = getByText(/Title/i);
    expect(component.dataset.variant).toBe("secondary");
  });

  it("It should render 'tertiary' variant", () => {
    const { getByText } = render(
      <Title variant="tertiary" type="button">
        Title
      </Title>
    );
    const component = getByText(/Title/i);
    expect(component.dataset.variant).toBe("tertiary");
  });

  it("It should render 'quaternary' variant", () => {
    const { getByText } = render(
      <Title variant="quaternary" type="button">
        Title
      </Title>
    );
    const component = getByText(/Title/i);
    expect(component.dataset.variant).toBe("quaternary");
  });
});
