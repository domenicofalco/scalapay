import { useContext } from "react";
import { CheckoutContext } from "contexts";
import Form from "usetheform";
import { BillingForm } from "organisms/Forms/BillingForm";
import { ConsumerForm } from "organisms/Forms/ConsumerForm";
import { ShippingForm } from "organisms/Forms/ShippingForm";
import { form } from "./Styles.module.css";
import { FormTemplate } from "./FormTemplate";

// const merchant = {
//   redirectCancelUrl: "https://www.google.it?redirectCancelUrl",
//   redirectConfirmUrl: "https://www.google.it?redirectConfirmUrl"
// };

// const items = [
//   {
//     price: { amount: "750", currency: "EUR" },
//     brand: "apple",
//     category: "elettronic device",
//     name: "iphone",
//     quantity: 1,
//     sku: "0123456"
//   }
// ];

export default function Payment() {
  const { cart } = useContext(CheckoutContext);
  const [context] = cart;
  const totalAmount = context.items.reduce((acc, a) => {
    return acc + parseInt(a.price.amount) * a.qt;
  }, 0);

  const onSubmit = state => {
    console.log(state);
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

      <button type="submit">buy for {totalAmount} EUR</button>
    </Form>
  );
}
