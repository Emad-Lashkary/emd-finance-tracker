import styled from "styled-components";
import Logo from "./Logo";
import ResponsiveNav from "./ResponsiveNav";
import ThemeSwitcher from "../ThemeSwitcher";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  background-color: var(--color-primary-900);
  color: white;
`;

function Header() {
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
  return (
    <HeaderContainer>
      <Logo />
      <ResponsiveNav />
      {!isMobile && <ThemeSwitcher />}
    </HeaderContainer>
  );
}

export default Header;
