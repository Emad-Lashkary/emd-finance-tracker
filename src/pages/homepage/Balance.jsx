import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  font-size: 30px;
  margin: 20px 0;
  padding: 10px 0;
  animation: fadeIn 0.3s ease-in-out;

  h3 {
    font-size: 28px;
    font-weight: 500;
  }
`;

function Balance() {
  const { calculateBalance } = useTransactions();
  const totalBalance = calculateBalance();

  return (
    <BalanceContainer>
      <h2>Your Balance</h2>
      <h3>${totalBalance.toFixed(2)}</h3>
    </BalanceContainer>
  );
}

export default Balance;
