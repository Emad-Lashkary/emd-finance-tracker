import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--color-primary-50);
  color: var(--color-primary-900);
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary-700);
`;

const AboutContainerComponent = ({ children }) => (
  <AboutContainer>
    <Header>About EMD Finance Tracker</Header>
    {children}
  </AboutContainer>
);

export default AboutContainerComponent;
