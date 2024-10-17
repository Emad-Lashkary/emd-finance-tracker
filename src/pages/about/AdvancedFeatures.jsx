import styled from "styled-components";

const AdvancedSection = styled.section`
  margin: 2rem 0;
  max-width: 900px;
  text-align: center;
  background: var(--color-primary-100);
  padding: 30px 60px;
  border-radius: 8px;

  h2 {
    margin-bottom: 1rem;
    color: var(--color-primary-700);
  }

  ul {
    list-style: none;
    padding: 10px 80px 0 80px;

    li {
      background: var(--color-primary-200);
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color-primary-300);
      }
    }
  }

  @media (max-width: 767px) {
    padding: 20px 10px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }

    ul {
      font-size: 11px;
      text-align: start;
      padding: 10px 5px 0 5px;
    }
  }
`;

const AdvancedFeatures = () => (
  <AdvancedSection>
    <h2>Advanced Features</h2>
    <p>
      Our finance tracker app is built with the latest technologies like Vite,
      React, and Styled Components. I utilize React Router for seamless
      navigation and include advanced features like:
    </p>
    <ul>
      <li>Responsive Design for all device sizes</li>
      <li>Various themes for a comfortable viewing experience</li>
      <li>Custom Hooks for reusable logic</li>
      <li>Context API for state management</li>
    </ul>
  </AdvancedSection>
);

export default AdvancedFeatures;
