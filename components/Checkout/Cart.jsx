import { useContext } from "react";
import Title from "molecules/Title";
import { CheckoutContext } from "contexts";
import CartItem from "organisms/CartItem";
import { cartWrapper, cartItem, heading } from "./Styles.module.css";

export default function Cart() {
  const { cart } = useContext(CheckoutContext);

  return (
    <div className={cartWrapper}>
      <Title className={heading} variant="tertiary">
        Your cart
      </Title>
      {cart.map((item, i) => (
        <div key={i} className={cartItem}>
          <CartItem {...item} />
        </div>
      ))}
    </div>
  );
}
