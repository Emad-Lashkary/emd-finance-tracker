import { useState, useEffect } from "react";
import styled from "styled-components";
import useTransactions from "../hooks/useTransactions";

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

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

function AddTransactionPage() {
  const { addTransaction } = useTransactions();
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
      category,
      type,
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("");
    setType("income");
  };

  return (
    <FormContainer>
      <h2>Add Transaction</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="installment">Installment</option>
          <option value="investment">Investment</option>
        </Select>
        <Button type="submit">Add Transaction</Button>
      </Form>
    </FormContainer>
  );
}

export default AddTransactionPage;
