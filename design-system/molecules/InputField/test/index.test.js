import React from "react";
import * as hooks from "usetheform";
import { cleanup, render } from "@testing-library/react";
import InputField from "../";

afterEach(cleanup);

describe("molecules => InputField", () => {
  it("It should render the inputfield with a label", () => {
    const { container, getByText, asFragment } = render(
      <hooks.Form>
        <InputField label="a_label" type="text" />
      </hooks.Form>
    );
    const label = getByText(/a_label/i);
    expect(label).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it("It should render the inputfield with no error", () => {
    jest
      .spyOn(hooks, "useValidation")
      .mockImplementation(() => [{ isValid: true }]);

    const { container } = render(
      <hooks.Form>
        <InputField label="a_label" type="text" />
      </hooks.Form>
    );
    const input = container.querySelector("input");
    const borderStyle = input.style.border;
    expect(borderStyle).toBe("2px solid #666666");
  });

  it("It should render the inputfield with error", () => {
    jest
      .spyOn(hooks, "useValidation")
      .mockImplementation(() => [{ isValid: false }]);

    const { container } = render(
      <hooks.Form>
        <InputField label="a_label" type="text" />
      </hooks.Form>
    );
    const input = container.querySelector("input");
    const borderStyle = input.style.border;
    expect(borderStyle).toBe("2px solid #ff0000");
  });
});
