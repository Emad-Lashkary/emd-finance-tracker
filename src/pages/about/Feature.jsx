import styled from "styled-components";

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: var(--color-primary-100);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--color-primary-500);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--color-primary-600);
  }

  p {
    color: var(--color-primary-800);
  }
`;

const Feature = ({ icon, title, description }) => (
  <FeatureWrapper>
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </FeatureWrapper>
);

export default Feature;
