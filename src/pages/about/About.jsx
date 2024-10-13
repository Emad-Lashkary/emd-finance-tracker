import React from "react";
import AboutContainerComponent from "./AboutContainer";
import FeatureList from "./FeatureList";
import AdvancedFeatures from "./AdvancedFeatures";

const About = () => (
  <AboutContainerComponent>
    <section>
      <p>
        EMD Finance Tracker is your personal finance management tool, designed
        to help you keep track of your income, expenses, savings, and
        investments effortlessly. With user-friendly features and advanced
        functionalities, our app ensures you have a clear view of your financial
        health at any given time.
      </p>
    </section>
    <FeatureList />
    <AdvancedFeatures />
  </AboutContainerComponent>
);

export default About;
