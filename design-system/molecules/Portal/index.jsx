import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ selector, children }) => {
  const [domElement, setDomElement] = useState(null);

  useEffect(() => {
    setDomElement(document.querySelector(selector));
  }, []);

  if (!domElement) return null;
  return createPortal(children, domElement);
};

Portal.propTypes = {
  selector: PropTypes.string,
  children: PropTypes.node
};

export default Portal;
