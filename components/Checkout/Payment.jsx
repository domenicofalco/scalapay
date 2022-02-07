import { useContext, useState } from "react";
import { CheckoutContext } from "contexts";
import Form from "usetheform";
import { SCALAPAY_V2_ORDER } from "endpoint";
import Button from "atoms/Button";
import PageLoader from "atoms/PageLoader";
import { BillingForm } from "organisms/Forms/BillingForm";
import { ConsumerForm } from "organisms/Forms/ConsumerForm";
import { ShippingForm } from "organisms/Forms/ShippingForm";
import { form } from "./Styles.module.css";
import { FormTemplate } from "./FormTemplate";

export default function Payment() {
  const [isLoading, setLoading] = useState(false);
  const { cart } = useContext(CheckoutContext);
  const [context] = cart;
  const { redirectCancelUrl, redirectConfirmUrl, items: cartItems } = context;

  const finalAmount = cartItems.reduce(
    (acc, a) => acc + parseInt(a.price.amount) * a.qt,
    0
  );

  const totalAmount = {
    currency: "EUR",
    amount: JSON.stringify(finalAmount)
  };

  const onSubmit = async state => {
    setLoading(true);

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

    const rawResponse = await fetch(SCALAPAY_V2_ORDER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newState)
    });

    const content = await rawResponse.json();

    setLoading(false);

    console.log(content);
  };

  return (
    <Form className={form} onSubmit={onSubmit}>
      {isLoading && <PageLoader />}

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
