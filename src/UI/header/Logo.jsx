import styled from "styled-components";

const Img = styled.img`
  width: 7rem;
  height: 7rem;
  scale: 1.4;
  filter: opacity(0.5) drop-shadow(0 0 0 var(--color-primary-900));
`;

const Logo = () => <Img src="./logo.png" alt="logo" />;

export default Logo;
