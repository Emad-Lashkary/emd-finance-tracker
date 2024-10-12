import styled from "styled-components";
import Balance from "../UI/Balance";
import IncomeExpenses from "../UI/IncomeExpenses";
import TransactionList from "../UI/TransactionList";
import Chart from "../UI/Chart";
import useTransactions from "../hooks/useTransactions";
import Footer from "../UI/Footer";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: var(--color-primary-200);
  border-radius: 8px;
`;

function HomePage() {
  const { transactions } = useTransactions();

  return (
    <HomePageContainer>
      <Section>
        <Balance />
      </Section>
      <Section>
        <IncomeExpenses />
      </Section>
      <Section>
        <Chart transactions={transactions} />
      </Section>
      <Section>
        <TransactionList />
      </Section>
      <Footer />
    </HomePageContainer>
  );
}

export default HomePage;
