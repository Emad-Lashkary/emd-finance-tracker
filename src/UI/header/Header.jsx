// Header.js
import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import Modal from "../Modal";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: var(--color-primary-900);
  color: white;
`;

function Header() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      <MenuButton onClick={toggleModal} />
      <Modal show={showModal} toggleModal={toggleModal} />
    </HeaderContainer>
  );
}

export default Header;
