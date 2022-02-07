import { useContext } from "react";
import { CheckoutContext } from "contexts";
import Form from "usetheform";
import { BillingForm } from "organisms/Forms/BillingForm";
import { ConsumerForm } from "organisms/Forms/ConsumerForm";
import { ShippingForm } from "organisms/Forms/ShippingForm";
import Button from "atoms/Button";
import { form } from "./Styles.module.css";
import { FormTemplate } from "./FormTemplate";

export default function Payment() {
  const { cart } = useContext(CheckoutContext);
  const [context] = cart;
  const { redirectCancelUrl, redirectConfirmUrl, items: cartItems } = context;

  const totalAmount = {
    currency: "EUR",
    amount: cartItems.reduce(
      (acc, a) => acc + parseInt(a.price.amount) * a.qt,
      0
    )
  };

  const onSubmit = state => {
    const merchant = { redirectCancelUrl, redirectConfirmUrl };
    const items = cartItems
      .filter(item => item.qt > 0)
      .map(item => ({
        price: item.price,
        brand: item.brand,
        category: item.category,
        name: item.name,
        quantity: item.qt,
        sku: item.id
      }));

    const newState = {
      ...state,
      merchant,
      items,
      totalAmount
    };

    console.log("newState", newState);
  };

  return (
    <Form className={form} onSubmit={onSubmit}>
      <FormTemplate title="Billing Info" groupName="billing">
        <BillingForm />
      </FormTemplate>

      <FormTemplate title="Consumer" groupName="consumer">
        <ConsumerForm />
      </FormTemplate>

      <FormTemplate groupName="shipping" title="Shipping">
        <ShippingForm />
      </FormTemplate>

      <Button variant="primary" type="submit">
        buy for {totalAmount.amount} {totalAmount.currency}
      </Button>
    </Form>
  );
}
