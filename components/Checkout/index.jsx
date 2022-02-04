import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./Header";
import Payment from "./Payment";
import Cart from "./Cart";
import { CheckoutContext } from "contexts";

export default function Checkout({ cart }) {
  const initCartAmount = cart.reduce((acc, a) => {
    return acc + parseInt(a.price.amount);
  }, 0);

  const [amount, setAmount] = useState(initCartAmount);

  const store = {
    cart,
    cartAmount: [amount, setAmount]
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
  cart: PropTypes.array
};
