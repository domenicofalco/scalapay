import styled from "styled-components";
import Button from "atoms/Button";
import { useEffect, useState } from "react";
import Paragraph from "atoms/Paragraph";

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled(Paragraph)`
  margin-right: 5px;
  margin-bottom: 5px;
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
    <div>
      <Text>
        {brand} - {name} ({category})
      </Text>
      <Text>
        Price per unit:{" "}
        <b>
          {amount} {currency}
        </b>
      </Text>
      <Quantity>
        <Text>Qt {quantity}</Text>
        <Button
          variant="roundIcon"
          type="button"
          style={{ marginRight: 5 }}
          onClick={add}
        >
          +
        </Button>
        <Button
          variant="roundIcon"
          type="button"
          style={{ marginRight: 5 }}
          onClick={remove}
        >
          -
        </Button>
      </Quantity>
    </div>
  );
}
