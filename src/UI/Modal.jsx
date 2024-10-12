import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

function Modal({ isShowing, hide, children, modalRef }) {
  return isShowing
    ? ReactDOM.createPortal(
        <ModalOverlay>
          <ModalContent ref={modalRef}>
            <button onClick={hide}>Close</button>
            {children}
          </ModalContent>
        </ModalOverlay>,
        document.body
      )
    : null;
}

export default Modal;
