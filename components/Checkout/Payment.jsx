import PropTypes from "prop-types";
import Form from "usetheform";
import { BillingForm } from "organisms/Forms/BillingForm";
import { ConsumerForm } from "organisms/Forms/ConsumerForm";
import { MerchantForm } from "organisms/Forms/MerchantForm";
import { ShippingForm } from "organisms/Forms/ShippingForm";
import { form } from "./Styles.module.css";
import { FormTemplate } from "./FormTemplate";

export default function Payment({ cart }) {
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

      <FormTemplate groupName="merchant" style={{ display: "none" }}>
        <MerchantForm />
      </FormTemplate>

      <FormTemplate groupName="shipping" title="Shipping">
        <ShippingForm />
      </FormTemplate>

      <button type="submit">submit</button>
    </Form>
  );
}

Payment.propTypes = {
  cart: PropTypes.array
};
