import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";

const IncomeExpensesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  animation: fadeIn 0.6s ease-in-out;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  margin: 20px 0;
  background-color: var(--color-primary-200);

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 15px 0;
  }
`;

const Income = styled.div`
  flex: 1;
  height: max-content;
  text-align: center;
  border-right: 1px solid var(--color-primary-400);
  border-radius: 8px 0 0 8px;
  padding: 30px 0 30px 20px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(76, 175, 79, 0.5);
  }

  & h3 {
    margin-bottom: 5px;
  }

  @media (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid var(--color-primary-400);
  }
`;

const Expenses = styled.div`
  flex: 1;
  text-align: center;
  border-radius: 0 8px 8px 0;
  padding: 30px 0 30px 20px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(244, 67, 54, 0.5);
  }

  & h3 {
    margin-bottom: 5px;
  }
`;

function IncomeExpenses() {
  const { calculateTotalIncome, calculateTotalExpenses } = useTransactions();
  const income = calculateTotalIncome();

  const expenses = calculateTotalExpenses();

  return (
    <IncomeExpensesContainer>
      <Income>
        <h3>Income</h3>
        <p>${income.toFixed(2)}</p>
      </Income>
      <Expenses>
        <h3>Expenses + Installments</h3>
        <p>${expenses.toFixed(2)}</p>
      </Expenses>
    </IncomeExpensesContainer>
  );
}

export default IncomeExpenses;
