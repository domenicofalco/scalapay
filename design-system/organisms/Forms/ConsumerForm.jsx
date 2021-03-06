import InputField from "molecules/InputField";
import { inputField } from "./Styles.module.css";
import { isRequired } from "utils";

const required = isRequired();

export function ConsumerForm() {
  return (
    <>
      <InputField
        validators={[required]}
        className={inputField}
        type="text"
        name="givenNames"
        label="Given names"
      />
      <InputField
        validators={[required]}
        className={inputField}
        type="text"
        name="surname"
        label="Surname"
      />
      <InputField
        validators={[required]}
        className={inputField}
        type="tel"
        name="phoneNumber"
        label="Phone number"
      />
      <InputField
        validators={[required]}
        type="email"
        name="email"
        label="Email"
      />
    </>
  );
}
