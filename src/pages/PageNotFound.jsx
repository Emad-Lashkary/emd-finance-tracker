import React from "react";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-primary-50);
  color: var(--color-primary-900);
  text-align: center;
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 80px;
  color: var(--color-primary-700);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--color-primary-600);
  color: var(--color-primary-50);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-primary-700);
  }
`;

const PageNotFound = () => {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate("/");
  }

  return (
    <PageNotFoundContainer>
      <IconWrapper>
        <FaExclamationTriangle />
      </IconWrapper>
      <Title>Page Not Found</Title>
      <Description>
        Sorry, the page you are looking for does not exist.
      </Description>
      <Button onClick={handleBackClick}>Go Back to Home</Button>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
