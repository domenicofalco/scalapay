import { useContext } from "react";
import Title from "molecules/Title";
import { CheckoutContext } from "contexts";
import CartItem from "organisms/CartItem";
import { cartWrapper, cartItem, heading } from "./Styles.module.css";

export default function Cart() {
  const { cart } = useContext(CheckoutContext);
  const [context, dispatch] = cart;
  const updateUnitQuantity = (productId, newAmount) => {
    const productUpdated = context.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          qt: newAmount
        };
      }
      return item;
    });

    dispatch(productUpdated);
  };

  return (
    <div className={cartWrapper}>
      <Title className={heading} variant="tertiary">
        Your cart
      </Title>
      {context.map((item, i) => (
        <div key={i} className={cartItem}>
          <CartItem updateUnitQuantity={updateUnitQuantity} {...item} />
        </div>
      ))}
    </div>
  );
}
