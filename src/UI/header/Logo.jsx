import styled from "styled-components";

const Img = styled.img`
  width: 7rem;
  height: 7rem;
  scale: 1.4;
  filter: opacity(0.5) drop-shadow(0 0 0 var(--color-primary-900));
  transition: 0.3s;

  &:hover {
    filter: opacity(0.6) drop-shadow(0 0 0 var(--color-primary-900));
  }

  @media (max-width: 767px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Logo = () => <Img src="./logo.png" alt="logo" />;

export default Logo;
