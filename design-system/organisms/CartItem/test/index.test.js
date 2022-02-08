import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import CartItem from "../";

const props = {
  price: { amount: "800", currency: "EUR" },
  brand: "apple",
  category: "mobile device",
  name: "iphone 13",
  qt: 1,
  id: "00000",
  updateUnitQuantity: () => null
};

afterEach(cleanup);

describe("organisms => CartItem", () => {
  it("It should match snapshots", () => {
    const { asFragment } = render(<CartItem {...props}>CartItem</CartItem>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("It should increase qt on + click", () => {
    const { container, getByText } = render(
      <CartItem {...props}>CartItem</CartItem>
    );
    const addButton = container.querySelector(".add-qt");
    const qtContainer = getByText(/Qt/i);

    expect(qtContainer.textContent).toBe("Qt 1");
    fireEvent.click(addButton);
    expect(qtContainer.textContent).toBe("Qt 2");
  });

  it("It should decrease qt on - click", () => {
    const { container, getByText } = render(
      <CartItem {...props}>CartItem</CartItem>
    );
    const removeButton = container.querySelector(".remove-qt");
    const qtContainer = getByText(/Qt/i);

    expect(qtContainer.textContent).toBe("Qt 1");
    fireEvent.click(removeButton);
    expect(qtContainer.textContent).toBe("Qt 0");
  });
});
