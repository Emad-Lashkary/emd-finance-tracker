import React from "react";
import FeatureList from "./FeatureList";
import AdvancedFeatures from "./AdvancedFeatures";
import styled from "styled-components";
import AboutHeader from "./AboutHeader";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  background-color: var(--color-primary-50);
  color: var(--color-primary-900);

  @media (max-width: 767px) {
    padding: 25px;
  }
`;

const About = () => (
  <AboutContainer>
    <AboutHeader>
      EMD Finance Tracker is your personal finance management tool, designed to
      help you keep track of your income, expenses, installments, and
      investments effortlessly. With user-friendly features and advanced
      functionalities, our app ensures you have a clear view of your financial
      health at any given time.
    </AboutHeader>
    <FeatureList />
    <AdvancedFeatures />
  </AboutContainer>
);

export default About;
