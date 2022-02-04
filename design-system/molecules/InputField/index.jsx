import PropTypes from "prop-types";
import styled from 'styled-components'
import { Input as I, useValidation } from "usetheform";
import { grey700, red900 } from "colors";
import { small, bold } from "fonts";
import { tablet } from "breakpoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.label`
  font-size: ${small};
  font-weight: ${bold};
  margin-right: 10px;
  margin-bottom: 4px;

  @media (min-width: ${tablet}) {
    width: 30%;
    margin-bottom: 0;  
  }
`;

const Input = styled(I)`
  padding: 5px 12px;
  border-radius: 5px;
  font-size: ${small};
  width: 100%;
  display: block;
  outline: none;
`;

const InputField = ({ className, type, label, validators, ...rest }) => {
  const [status, validationAttr] = useValidation(validators);

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <Input
        style={{
          border: `2px solid ${status.isValid ? grey700 : red900}`
        }}
        touched 
        type={type}
        {...validationAttr} 
        {...rest}
      />
    </Wrapper>
  );
}

InputField.defaultProps = {
  label: "",
  className: "",
  validators: []
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  validators: PropTypes.array
};

export default InputField;