import Form from "usetheform";
import Forms, { FORM_TYPE_BILLING, FORM_TYPE_CONSUMER } from "organisms/Forms";
import { form } from "./Styles.module.css";

export default function Payment() {
  const onSubmit = state => {
    console.log(state);
  };

  return (
    <Form className={form} onSubmit={onSubmit}>
      <Forms type={FORM_TYPE_BILLING} title="Billing Info" />
      <Forms type={FORM_TYPE_CONSUMER} title="Consumer info" />

      <button type="submit">submit</button>
    </Form>
  );
}
