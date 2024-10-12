import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import useTransactions from "../../hooks/useTransactions";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-in-out;

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-primary-900);
    animation: fadeIn 0.3s ease-in-out;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--color-primary-300);
  border-radius: 4px;
  animation: ${fadeIn} 0.6s ease-in-out;

  &:focus {
    border-color: var(--color-primary-500);
    outline: none;
  }
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--color-primary-300);
  border-radius: 4px;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--color-primary-600);
  color: var(--color-primary-50);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation: ${fadeIn} 0.9s ease-in-out;

  &:hover {
    background-color: var(--color-primary-700);
  }
`;

const EditTransactionForm = ({ transaction, onClose }) => {
  const { transactions, setTransactions } = useTransactions();
  const [updatedTransaction, setUpdatedTransaction] = useState(transaction);

  useEffect(() => {
    setUpdatedTransaction(transaction);
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTransaction((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isChanged = Object.keys(transaction).some(
      (key) => transaction[key] !== updatedTransaction[key]
    );

    if (isChanged) {
      const updatedTransactions = transactions.map((t) =>
        t.id === transaction.id ? updatedTransaction : t
      );
      setTransactions(updatedTransactions);
      onClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Transaction</h2>
      <Input
        type="text"
        name="description"
        placeholder="Description"
        value={updatedTransaction.description}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        value={updatedTransaction.amount}
        onChange={handleChange}
        required
      />
      <Input
        type="date"
        name="date"
        value={updatedTransaction.date}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="category"
        placeholder="Category"
        value={updatedTransaction.category}
        onChange={handleChange}
        required
      />
      <Select
        name="type"
        value={updatedTransaction.type}
        onChange={handleChange}
        required
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
        <option value="installment">Installment</option>
        <option value="investment">Investment</option>
      </Select>
      <Button type="submit">Save</Button>
    </Form>
  );
};

EditTransactionForm.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditTransactionForm;
