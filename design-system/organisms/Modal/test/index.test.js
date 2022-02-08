import React from "react";
import { cleanup, render } from "@testing-library/react";
import Modal from "../";

jest.mock("molecules/Portal", () => {
  return props => <div {...props}>{props.children}</div>;
});

const props = {
  showModal: true,
  children: <div>a children</div>,
  onClose: () => null
};

afterEach(cleanup);

describe("organisms => Modal", () => {
  it("It should match snapshots and render children", () => {
    const { asFragment, getByText } = render(
      <Modal {...props}>
        <div>Modal</div>
      </Modal>
    );

    const children = getByText(/Modal/i);
    expect(children).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it("It should not render the modal", () => {
    const { container } = render(
      <Modal {...props} showModal={false}>
        <div className="a_children">Modal</div>
      </Modal>
    );

    const children = container.querySelector(".a_children");
    expect(children).toBeFalsy();
  });
});
