// src/hooks/useTransactions.js
import { useState, useEffect } from "react";

function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return [
      {
        amount: 2500,
        category: "salary",
        date: "2024-01-15",
        description: "monthly salary",
        id: 2389472394738,
        type: "income",
      },
      {
        amount: 100,
        category: "groceries",
        date: "2024-02-01",
        description: "weekly grocery shopping",
        id: 2389483294738,
        type: "expense",
      },
      {
        amount: 150,
        category: "utilities",
        date: "2024-02-15",
        description: "monthly electricity bill",
        id: 2389483294739,
        type: "expense",
      },
      {
        amount: 1000,
        category: "freelance",
        date: "2024-03-12",
        description: "freelance project payment",
        id: 2389483394740,
        type: "income",
      },
      {
        amount: 5000,
        category: "loan repayment",
        date: "2024-03-18",
        description: "loan installment",
        id: 2389483494741,
        type: "installment",
      },
      {
        amount: 200,
        category: "entertainment",
        date: "2024-04-05",
        description: "concert tickets",
        id: 2389483594742,
        type: "expense",
      },
      {
        amount: 300,
        category: "transport",
        date: "2024-04-20",
        description: "monthly train pass",
        id: 2389483694743,
        type: "expense",
      },
      {
        amount: 1500,
        category: "stocks",
        date: "2024-05-07",
        description: "buying shares in Apple",
        id: 2389483794744,
        type: "investment",
      },
      {
        amount: 750,
        category: "healthcare",
        date: "2024-05-22",
        description: "dental surgery",
        id: 2389483894745,
        type: "expense",
      },
      {
        amount: 2000,
        category: "salary",
        date: "2024-06-01",
        description: "monthly salary",
        id: 2389483994746,
        type: "income",
      },
      {
        amount: 350,
        category: "furniture",
        date: "2024-06-14",
        description: "new office chair",
        id: 2389484094747,
        type: "expense",
      },
      {
        amount: 800,
        category: "freelance",
        date: "2024-07-03",
        description: "graphic design project",
        id: 2389484194748,
        type: "income",
      },
      {
        amount: 100,
        category: "charity",
        date: "2024-07-19",
        description: "donation to local shelter",
        id: 2389484294749,
        type: "expense",
      },
      {
        amount: 7000,
        category: "loan repayment",
        date: "2024-08-08",
        description: "mortgage installment",
        id: 2389484394750,
        type: "installment",
      },
      {
        amount: 450,
        category: "shopping",
        date: "2024-08-21",
        description: "new clothes",
        id: 2389484494751,
        type: "expense",
      },
      {
        amount: 2500,
        category: "crypto currency",
        date: "2024-09-05",
        description: "buying Ethereum",
        id: 2389484594752,
        type: "investment",
      },
      {
        amount: 600,
        category: "vacation",
        date: "2024-09-20",
        description: "weekend trip",
        id: 2389484694753,
        type: "expense",
      },
      {
        amount: 1000,
        category: "salary",
        date: "2024-10-01",
        description: "part-time job salary",
        id: 2389484794754,
        type: "income",
      },
      {
        amount: 400,
        category: "education",
        date: "2024-10-16",
        description: "online course fee",
        id: 2389484894755,
        type: "expense",
      },
      {
        amount: 3000,
        category: "stocks",
        date: "2024-11-02",
        description: "buying shares in Tesla",
        id: 2389484994756,
        type: "investment",
      },
      {
        amount: 120,
        category: "subscriptions",
        date: "2024-11-19",
        description: "annual magazine subscription",
        id: 2389485094757,
        type: "expense",
      },
      {
        amount: 1500,
        category: "freelance",
        date: "2024-12-01",
        description: "web development project",
        id: 2389485194758,
        type: "income",
      },
      {
        amount: 700,
        category: "insurance",
        date: "2024-12-12",
        description: "car insurance premium",
        id: 2389485294759,
        type: "expense",
      },
      {
        amount: 5000,
        category: "real estate",
        date: "2025-01-06",
        description: "investment in property",
        id: 2389485394760,
        type: "investment",
      },
      {
        amount: 100,
        category: "medical",
        date: "2025-01-20",
        description: "prescription medication",
        id: 2389485494761,
        type: "expense",
      },
      {
        amount: 800,
        category: "freelance",
        date: "2025-02-03",
        description: "photography gig payment",
        id: 2389485594762,
        type: "income",
      },
      {
        amount: 150,
        category: "entertainment",
        date: "2025-02-18",
        description: "movie night with friends",
        id: 2389485694763,
        type: "expense",
      },
      {
        amount: 6000,
        category: "loan repayment",
        date: "2025-03-10",
        description: "car loan installment",
        id: 2389485794764,
        type: "installment",
      },
      {
        amount: 250,
        category: "gadgets",
        date: "2025-03-24",
        description: "new smartphone",
        id: 2389485894765,
        type: "expense",
      },
      {
        amount: 1000,
        category: "salary",
        date: "2025-04-05",
        description: "part-time job salary",
        id: 2389485994766,
        type: "income",
      },
    ];
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

  return {
    transactions,
    addTransaction,
    deleteTransaction,
  };
}

export default useTransactions;
