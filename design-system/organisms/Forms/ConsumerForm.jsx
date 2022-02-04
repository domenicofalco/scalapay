import { Collection } from "usetheform";
import InputField from "molecules/InputField";
import Title from "molecules/Title";
import { inputField, sectionTitle, fieldset } from "./Styles.module.css";
import { isRequired } from "utils";

const required = isRequired();

export function ConsumerForm({ title }) {
  return (
    <fieldset className={fieldset}>
      {title && (
        <Title className={sectionTitle} variant="tertiary">
          {title}
        </Title>
      )}
      <Collection touched object name="consumer">
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
      </Collection>
    </fieldset>
  );
}
