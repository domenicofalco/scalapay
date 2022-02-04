import { Collection } from "usetheform";
import InputField from "molecules/InputField";
import Title from "molecules/Title";
import { inputField, sectionTitle, fieldset } from "./Styles.module.css";

export function BillingForm({ title }) {
  return (
    <fieldset className={fieldset}>
      {title && (
        <Title className={sectionTitle} variant="tertiary">
          {title}
        </Title>
      )}
      <Collection touched object name="billing">
        <InputField
          className={inputField}
          type="text"
          name="countryCode"
          label="Country code"
        />
        <InputField
          className={inputField}
          type="text"
          name="name"
          label="City"
        />
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
      </Collection>
    </fieldset>
  );
}
