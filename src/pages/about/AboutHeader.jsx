import styled from "styled-components";

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  max-width: 900px;
  padding: 30px 50px;
  border-radius: 8px;
  background-color: var(--color-primary-200);

  & h2 {
    font-size: 40px;
    margin-bottom: 1rem;
    color: var(--color-primary-800);
  }

  & p {
    font-size: 20px;
    color: var(--color-primary-900);
    font-weight: 500;
    text-align: center;
  }
`;

function AboutHeader({ children }) {
  return (
    <>
      <Header>
        <h2>About EMD Finance Tracker</h2> <p>{children}</p>
      </Header>
    </>
  );
}

export default AboutHeader;
