import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./Header";
import Payment from "./Payment";
import Cart from "./Cart";
import { CheckoutContext } from "contexts";

export default function Checkout({ cart }) {
  const [context, dispatch] = useState(cart);

  const store = {
    cart: [context, dispatch]
  };

  return (
    <CheckoutContext.Provider value={store}>
      <Header />
      <Cart />
      <Payment />
    </CheckoutContext.Provider>
  );
}

Checkout.propTypes = {
  cart: PropTypes.object
};
