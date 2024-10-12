import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";

const BalanceContainer = styled.div`
  text-align: center;
  font-size: 1.5em;
  margin: 20px 0;
  animation: fadeIn 0.3s ease-in-out;
`;

function Balance() {
  const { transactions } = useTransactions();
  const totalBalance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <BalanceContainer>
      <h2>Your Balance</h2>
      <h3>${totalBalance.toFixed(2)}</h3>
    </BalanceContainer>
  );
}

export default Balance;
