import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-primary-200);
  font-size: 1.5em;
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

function MenuButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaBars />
    </Button>
  );
}

export default MenuButton;
