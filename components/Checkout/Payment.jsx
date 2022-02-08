import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "contexts";
import Form from "usetheform";
import { SCALAPAY_V2_ORDER } from "endpoint";
import Button from "atoms/Button";
import Title from "atoms/Title";
import Paragraph from "atoms/Paragraph";
import PageLoader from "atoms/PageLoader";
import Modal from "organisms/Modal";
import { BillingForm } from "organisms/Forms/BillingForm";
import { ConsumerForm } from "organisms/Forms/ConsumerForm";
import { ShippingForm } from "organisms/Forms/ShippingForm";
import { form } from "./Styles.module.css";
import { FormTemplate } from "./FormTemplate";
import { knownErrors } from "./errors";

export default function Payment() {
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
    const { checkoutUrl, message } = content;

    if (checkoutUrl) {
      window.open(checkoutUrl, "_top");
    } else {
      if (knownErrors[message]) {
        const formatError = [
          {
            messages: [knownErrors[message]]
          }
        ];
        setErrors(formatError);
      } else if (message.errors && message.errors.length > 0) {
        setErrors(message.errors);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (errors && errors.length > 0) {
      setShowModal(true);
    }
  }, [errors]);

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

      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <Title variant="quaternary" style={{ marginBottom: 16 }}>
          There seems to be an error with your request
        </Title>
        {errors &&
          errors.length > 0 &&
          errors.map(error => {
            return error.messages.map((msg, i) => (
              <Paragraph key={i}>{msg}</Paragraph>
            ));
          })}
      </Modal>
    </Form>
  );
}
