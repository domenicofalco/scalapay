import PropTypes from "prop-types";
import Portal from "molecules/Portal";
import Button from "atoms/Button";
import { white } from "colors";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Container = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 0;
  position: absolute;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${white};
`;

const BtnWrap = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ChildWrap = styled.div`
  padding: 20px 40px 20px 20px;
`;

const Modal = ({ showModal, children, onClose }) => {
  if (!showModal) return null;

  return (
    <Portal selector="#modal-root">
      <Wrapper>
        <Container>
          <BtnWrap>
            <Button type="button" onClick={onClose} variant="roundIcon">
              X
            </Button>
          </BtnWrap>
          <ChildWrap>{children}</ChildWrap>
        </Container>
      </Wrapper>
    </Portal>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
