import PropTypes from "prop-types";
import styled from "styled-components";
import { base, black } from "fonts";
import { grey900, lightBlue, beige } from "colors";

const common = {
  fontSize: base,
  color: grey900,
  fontWeight: black,
  textTransform: "uppercase",
  border: `2px solid ${grey900}`,
  borderRadius: "30px",
  padding: "16px",
  cursor: "pointer"
};

const primary = styled.button`
  background: ${lightBlue};
  ${common};
`;

const secondary = styled.button`
  background: ${beige};
  ${common}
`;

const roundIcon = styled.button`
  background: ${beige};
  border: 2px solid ${grey900};
  color: ${grey900};
  font-size: ${base};
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const Button = ({ children, variant, ...rest }) => {
  const El = Button.variants[variant] || primary;
  return <El {...rest}>{children}</El>;
};

Button.variants = {
  primary,
  secondary,
  roundIcon
};

Button.defaultProps = {
  variant: "primary"
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired
};

export default Button;
