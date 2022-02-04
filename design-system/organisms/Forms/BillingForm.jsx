import InputField from "molecules/InputField";
import { inputField } from "./Styles.module.css";

export function BillingForm() {
  return (
    <>
      <InputField
        className={inputField}
        type="text"
        name="countryCode"
        label="Country code"
      />
      <InputField className={inputField} type="text" name="name" label="City" />
      <InputField
        className={inputField}
        type="text"
        name="phoneNumber"
        label="Phone number"
      />
      <InputField
        className={inputField}
        type="text"
        name="postcode"
        label="Postcode"
      />
      <InputField
        className={inputField}
        type="text"
        name="suburb"
        label="Suburb"
      />
      <InputField type="text" name="line1" label="Street" />
    </>
  );
}
