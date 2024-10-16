import { useState, useEffect } from "react";
import initialTransactions from "../helpers/helpers";

function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [...initialTransactions];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const calculateBalance = () => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);
    const totalExpenses = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);
    const totalInstallments = transactions
      .filter((transaction) => transaction.type === "installment")
      .reduce((total, transaction) => total + transaction.amount, 0);
    return totalIncome - totalExpenses - totalInstallments;
  };

  const calculateTotalExpenses = () => {
    const totalExpenses = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);
    const totalInstallments = transactions
      .filter((transaction) => transaction.type === "installment")
      .reduce((total, transaction) => total + transaction.amount, 0);
    return totalExpenses + totalInstallments;
  };

  const calculateTotalIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    calculateBalance,
    calculateTotalExpenses,
    calculateTotalIncome,
  };
}

export default useTransactions;
