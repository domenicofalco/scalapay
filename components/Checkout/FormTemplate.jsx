import PropTypes from "prop-types";
import { Collection } from "usetheform";
import InputField from "molecules/InputField";
import Title from "molecules/Title";
import { sectionTitle, fieldset } from "./Styles.module.css";
import { isRequired } from "utils";

const required = isRequired();

export function FormTemplate({ title, groupName, children, ...rest }) {
  return (
    <fieldset className={fieldset} {...rest}>
      {title && (
        <Title className={sectionTitle} variant="tertiary">
          {title}
        </Title>
      )}
      <Collection touched object name={groupName}>
        {children}
      </Collection>
    </fieldset>
  );
}

FormTemplate.propTypes = {
  title: PropTypes.string
};
