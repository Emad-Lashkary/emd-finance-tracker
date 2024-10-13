import styled from "styled-components";

const AdvancedSection = styled.section`
  margin: 2rem 0;
  width: 1000px;
  text-align: center;
  background: var(--color-primary-100);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    color: var(--color-primary-700);
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background: var(--color-primary-200);
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color-primary-300);
      }
    }
  }
`;

const AdvancedFeatures = () => (
  <AdvancedSection>
    <h2>Advanced Features</h2>
    <p>
      Our finance tracker app is built with the latest technologies like Vite,
      React, and Styled Components. We utilize React Router for seamless
      navigation and include advanced features like:
    </p>
    <ul>
      <li>Responsive Design for all device sizes</li>
      <li>Dark Mode for a comfortable viewing experience</li>
      <li>Custom Hooks for reusable logic</li>
      <li>Context API for state management</li>
    </ul>
  </AdvancedSection>
);

export default AdvancedFeatures;
