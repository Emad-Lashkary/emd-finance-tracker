import styled from "styled-components";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./transactionList/TransactionList";
import Balance from "./Balance";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
  return (
    <HomePageContainer>
      <Section>
        <Balance />
      </Section>
      {/* <Section> */}
      <IncomeExpenses />
      {/* </Section> */}
      <Section>
        <TransactionList />
      </Section>
    </HomePageContainer>
  );
}

export default HomePage;
