import styled from "styled-components";
import {
  FaChartBar,
  FaPiggyBank,
  FaDollarSign,
  FaClipboardList,
} from "react-icons/fa";
import Feature from "./Feature";

const FeatureSection = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  text-align: center;
`;

const features = [
  {
    icon: <FaClipboardList />,
    title: "Comprehensive Tracking",
    description:
      "Record all types of transactions with detailed descriptions, dates, and categories to stay organized.",
  },
  {
    icon: <FaChartBar />,
    title: "Visual Analytics",
    description:
      "Visualize your financial data with dynamic pie and bar charts for better understanding and analysis.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Saving Goals",
    description:
      "Set and track your saving goals, ensuring you stay on target to achieve your financial milestones.",
  },
  {
    icon: <FaDollarSign />,
    title: "Budget Management",
    description:
      "Create budgets for different categories and monitor your spending to avoid overspending.",
  },
];

const FeatureList = () => (
  <FeatureSection>
    {features.map((feature, index) => (
      <Feature
        key={index}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </FeatureSection>
);

export default FeatureList;
