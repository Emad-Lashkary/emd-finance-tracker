import styled from "styled-components";
import { hexToRgba } from "../../helpers/helpers";

const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 0px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  animation: fadeIn 0.6s ease-in-out;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  background: ${(props) => hexToRgba(props.bgColor)};
  border-radius: 8px;
  margin: 0 10px;
  transition: 0.2s;

  &:hover {
    background: ${(props) => hexToRgba(props.bgColor, 0.7)};
  }
`;

function Summary({ filteredTransactions }) {
  const totalIncome = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalInstallment = filteredTransactions
    .filter((t) => t.type === "installment")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalInvestments = filteredTransactions
    .filter((t) => t.type === "investment")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <StyledSummary>
      <SummaryItem bgColor="#4caf50">
        <h3>Total Income</h3>
        <p>${totalIncome.toFixed(2)}</p>
      </SummaryItem>
      <SummaryItem bgColor="#f44336">
        <h3>Total Expenses</h3>
        <p>${totalExpenses.toFixed(2)}</p>
      </SummaryItem>
      <SummaryItem bgColor="#2196f3">
        <h3>Total Installment</h3>
        <p>${totalInstallment.toFixed(2)}</p>
      </SummaryItem>
      <SummaryItem bgColor="#9c27b0">
        <h3>Total Investments</h3>
        <p>${totalInvestments.toFixed(2)}</p>
      </SummaryItem>
    </StyledSummary>
  );
}

export default Summary;
