import { useState } from "react";
import PropTypes from "prop-types";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  height: 400px;
  padding: 10px 0 50px 0;
  margin: 0 auto;

  & button {
    width: fit-content;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 50px;
    color: var(--color-primary-800);
    background-color: var(--color-primary-100);
    transition: all 0.3s;
  }
  & button:hover {
    background-color: var(--color-primary-50);
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;

function Chart({ transactions }) {
  const [chartType, setChartType] = useState("bar");

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const installment = transactions
    .filter((t) => t.type === "installment")
    .reduce((acc, t) => acc + t.amount, 0);
  const investments = transactions
    .filter((t) => t.type === "investment")
    .reduce((acc, t) => acc + t.amount, 0);

  const barData = {
    labels: ["Income", "Expenses", "installment", "Investments"],
    datasets: [
      {
        label: "Amount",
        data: [income, expenses, installment, investments],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3", "#9c27b0"],
        borderColor: ["#388e3c", "#d32f2f", "#1976d2", "#7b1fa2"],
        borderWidth: 1,
        hoverBackgroundColor: ["#66bb6a", "#e57373", "#64b5f6", "#ba68c8"],
        hoverBorderColor: ["#388e3c", "#d32f2f", "#1976d2", "#7b1fa2"],
      },
    ],
  };

  const pieData = {
    labels: ["Income", "Expenses", "installment", "Investments"],
    datasets: [
      {
        label: "Amount",
        data: [income, expenses, installment, investments],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3", "#9c27b0"],
        hoverBackgroundColor: ["#66bb6a", "#e57373", "#64b5f6", "#ba68c8"],
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount in USD",
        },
      },
      x: {
        title: {
          display: true,
          text: "Transaction Type",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <ChartContainer>
      <button onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}>
        Switch to {chartType === "bar" ? "Pie" : "Bar"} Chart
      </button>
      {chartType === "bar" ? (
        <Bar data={barData} options={barOptions} />
      ) : (
        <Pie data={pieData} options={pieOptions} />
      )}
    </ChartContainer>
  );
}

Chart.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Chart;
