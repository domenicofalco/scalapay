import styled from "styled-components";
import { base } from "fonts";
import { useEffect, useState } from "react";

const Wrapper = styled.div``;

const Text = styled.p`
  font-size: ${base};
`;

const Button = styled.button`
  border: 1px solid #000;
  width: 20px;
  margin: 0 4px;
  padding: 3px;
  cursor: pointer;
  background: none;
`;

export default function CartItem({
  price: { amount, currency },
  brand,
  category,
  name,
  qt,
  id,
  updateUnitQuantity = () => null
}) {
  const [quantity, setQuantity] = useState(qt);
  const add = () => {
    setQuantity(quantity + 1);
  };

  const remove = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    updateUnitQuantity(id, quantity);
  }, [quantity]);

  return (
    <Wrapper>
      <Text>
        {brand} - {name} ({category})
      </Text>
      <Text>
        quantity {quantity}
        <Button onClick={add}>+</Button>
        <Button onClick={remove}>-</Button>
      </Text>
      <Text>
        Price per unit: {amount} {currency}
      </Text>
      <Text>SKU {id}</Text>
    </Wrapper>
  );
}
