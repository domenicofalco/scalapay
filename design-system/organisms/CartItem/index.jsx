import styled from "styled-components";
import { base } from "fonts";

const Wrapper = styled.div``;

const Text = styled.p`
  font-size: ${base};
`;

export default function CartItem({
  price: { amount, currency },
  brand,
  category,
  name,
  qt,
  id
}) {
  return (
    <Wrapper>
      <Text>
        {brand} - {name} ({category})
      </Text>
      <Text>quantity {qt}</Text>
      <Text>
        Price per unit: {amount} {currency}
      </Text>
      <Text>sky {id}</Text>
    </Wrapper>
  );
}
