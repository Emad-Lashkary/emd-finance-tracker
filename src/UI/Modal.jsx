import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  font-family: Arial, sans-serif;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

const ModalContent = styled.div`
  background: var(--color-primary-200);
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;

  & button {
    border: none;
    background: none;
    padding: 5px 10px;
    background-color: var(--color-primary-300);
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      background-color: var(--color-primary-400);
    }
  }

  @media (max-width: 768px) {
    width: 350px;
    max-width: 80%;
  }
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
