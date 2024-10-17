import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import Modal from "../Modal";
import styled from "styled-components";
import ThemeSwitcher from "../ThemeSwitcher";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ModalNav = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-primary-900);
  margin: 10px;
  padding-top: 10px;
  gap: 5px;
`;

function ResponsiveNav() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {!isMobile && (
        <NavContainer>
          <NavLinks />
        </NavContainer>
      )}
      {isMobile && <MenuButton onClick={toggleModal} />}
      {isMobile && (
        <Modal isShowing={showModal} hide={toggleModal}>
          <ModalNav>
            <NavLinks />
            <ThemeSwitcher />
          </ModalNav>
        </Modal>
      )}
    </>
  );
}

export default ResponsiveNav;
