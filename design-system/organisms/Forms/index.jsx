import { BillingForm } from "./BillingForm";
import { ConsumerForm } from "./ConsumerForm";

export const FORM_TYPE_BILLING = "billing_form";
export const FORM_TYPE_CONSUMER = "consumer_form";

export default function Forms({ type, ...rest }) {
  let component = null;

  switch (type) {
    case FORM_TYPE_BILLING:
      component = <BillingForm {...rest} />;
      break;
    case FORM_TYPE_CONSUMER:
      component = <ConsumerForm {...rest} />;
      break;
    default:
      component = null;
  }

  return component;
}
