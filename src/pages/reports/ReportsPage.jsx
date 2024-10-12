import { useState } from "react";
import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";
import Chart from "../../UI/Chart";
import { subDays, subWeeks, subMonths, subYears, isAfter } from "date-fns";
import SelectPeriod from "./SelectPeriod";

const ReportsContainer = styled.div`
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
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  background: #e9ecef;
  border-radius: 8px;
  margin: 0 10px;
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
        startDate = new Date(0); // Start from the earliest date
    }

    return transactions.filter((transaction) =>
      isAfter(new Date(transaction.date), startDate)
    );
  };

  const filteredTransactions = filterTransactions(transactions, period);

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
    <ReportsContainer>
      <Section>
        <h2>Summary</h2>
        <SelectPeriod period={period} setPeriod={setPeriod} />
        <Summary>
          <SummaryItem>
            <h3>Total Income</h3>
            <p>${totalIncome.toFixed(2)}</p>
          </SummaryItem>
          <SummaryItem>
            <h3>Total Expenses</h3>
            <p>${totalExpenses.toFixed(2)}</p>
          </SummaryItem>
          <SummaryItem>
            <h3>Total Installment</h3>
            <p>${totalInstallment.toFixed(2)}</p>
          </SummaryItem>
          <SummaryItem>
            <h3>Total Investments</h3>
            <p>${totalInvestments.toFixed(2)}</p>
          </SummaryItem>
        </Summary>
      </Section>
      <Section>
        <h2>Transactions Chart</h2>
        <Chart transactions={filteredTransactions} />
      </Section>
    </ReportsContainer>
  );
}

export default ReportsPage;
