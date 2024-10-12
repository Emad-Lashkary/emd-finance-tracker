import styled from "styled-components";
import useTransactions from "../hooks/useTransactions";

const IncomeExpensesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Income = styled.div`
  flex: 1;
  text-align: center;
  border-right: 1px solid #ccc;
`;

const Expenses = styled.div`
  flex: 1;
  text-align: center;
`;

function IncomeExpenses() {
  const { transactions } = useTransactions();
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <IncomeExpensesContainer>
      <Income>
        <h3>Income</h3>
        <p>${income.toFixed(2)}</p>
      </Income>
      <Expenses>
        <h3>Expenses</h3>
        <p>${expenses.toFixed(2)}</p>
      </Expenses>
    </IncomeExpensesContainer>
  );
}

export default IncomeExpenses;
