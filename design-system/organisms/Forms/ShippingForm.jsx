import InputField from "molecules/InputField";
import { inputField } from "./Styles.module.css";

import { isRequired } from "utils";

const required = isRequired();

export function ShippingForm() {
  return (
    <>
      <InputField
        validators={[required]}
        className={inputField}
        type="text"
        name="countryCode"
        label="Country code"
      />
      <InputField
        validators={[required]}
        className={inputField}
        type="text"
        name="name"
        label="City"
      />

      <InputField
        validators={[required]}
        className={inputField}
        type="text"
        name="postcode"
        label="Postcode"
      />

      <InputField
        validators={[required]}
        type="text"
        name="line1"
        label="Street"
      />
    </>
  );
}
