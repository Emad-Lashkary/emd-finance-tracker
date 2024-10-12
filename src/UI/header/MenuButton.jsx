import styled from "styled-components";

const Button = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function MenuButton({ onClick }) {
  <Button onClick={onClick}>☰</Button>;
}

export default MenuButton;
