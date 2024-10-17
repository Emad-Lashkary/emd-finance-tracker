import { useState } from "react";
import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";
import Chart from "./Chart";
import { subDays, subWeeks, subMonths, subYears, isAfter } from "date-fns";
import SelectPeriod from "./SelectPeriod";
import Summary from "./Summary";

const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: var(--color-primary-200);
  border-radius: 8px;
  animation: fadeIn 0.3s ease-in-out;

  @media (max-width: 767px) {
    padding: 20px 10px;
  }
`;

function ReportsPage() {
  const { transactions } = useTransactions();
  const [period, setPeriod] = useState("all");

  const filterTransactions = (transactions, period) => {
    const now = new Date();
    let startDate;

    switch (period) {
      case "day":
        startDate = subDays(now, 1);
        break;
      case "week":
        startDate = subWeeks(now, 1);
        break;
      case "month":
        startDate = subMonths(now, 1);
        break;
      case "year":
        startDate = subYears(now, 1);
        break;
      case "all":
      default:
        startDate = new Date(0);
    }

    return transactions.filter((transaction) =>
      isAfter(new Date(transaction.date), startDate)
    );
  };

  const filteredTransactions = filterTransactions(transactions, period);

  return (
    <ReportsContainer>
      <Section>
        <h2>Summary</h2>
        <SelectPeriod period={period} setPeriod={setPeriod} />
        <Summary filteredTransactions={filteredTransactions} />
      </Section>
      <Section>
        <h2>Transactions Chart</h2>
        <Chart transactions={filteredTransactions} />
      </Section>
    </ReportsContainer>
  );
}

export default ReportsPage;
