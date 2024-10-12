import PropTypes from "prop-types";
import styled from "styled-components";
import useTransactions from "../hooks/useTransactions";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditTransactionForm = ({ transaction, onClose }) => {
  const { transactions, setTransactions } = useTransactions();
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date);
  const [category, setCategory] = useState(transaction.category);
  const [type, setType] = useState(transaction.type);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      description,
      amount: parseFloat(amount),
      date,
      category,
      type,
    };
    const updatedTransactions = transactions.map((t) =>
      t.id === transaction.id ? updatedTransaction : t
    );
    setTransactions(updatedTransactions);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <Select value={type} onChange={(e) => setType(e.target.value)} required>
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
