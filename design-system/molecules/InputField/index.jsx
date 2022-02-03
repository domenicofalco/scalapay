import PropTypes from "prop-types";
import styled from 'styled-components'
import { Input as I } from "usetheform";
import { grey900 } from "colors";
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
  border: 1px solid ${grey900};
  font-size: ${small};
  width: 100%;
`;

const InputField = ({type, label, ...rest}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type={type} {...rest} />
    </Wrapper>
  );
}

InputField.defaultProps = {
  label: ""
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputField;