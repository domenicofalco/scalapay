import PropTypes from "prop-types";
import styled from "styled-components";
import { base, medium, large, xLarge, black } from "fonts";
import { grey900 } from "colors";

const commonStyles = {
  color: grey900,
  fontWeight: black
};

const H1 = styled.h1`
  font-size: ${xLarge};
  ${commonStyles}
`;

const H2 = styled.h2`
  font-size: ${large};
  ${commonStyles}
`;

const H3 = styled.h3`
  font-size: ${medium};
  ${commonStyles}
`;

const H4 = styled.h4`
  font-size: ${base};
  ${commonStyles}
`;

const Title = ({ children, variant, ...rest }) => {
  const El = Title.variants[variant] || primary;
  return (
    <El {...rest} data-variant={variant}>
      {children}
    </El>
  );
};

Title.variants = {
  primary: H1,
  secondary: H2,
  tertiary: H3,
  quaternary: H4
};

Title.defaultProps = {
  variant: "primary"
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};

export default Title;
