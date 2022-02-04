import PropTypes from "prop-types";
import Header from "./Header";
import Payment from "./Payment";

export default function Checkout({ cart }) {
  return (
    <>
      <Header />
      <Payment cart={cart} />
    </>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array
};
