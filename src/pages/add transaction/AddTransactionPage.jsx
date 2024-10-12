import { useState, useEffect } from "react";
import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-primary-50);
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px;
  padding: 30px;
  background: var(--color-primary-200);
  border-radius: 8px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-primary-900);
    animation: fadeIn 0.6s ease-in-out;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.9s ease-in-out;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--color-primary-300);
  border-radius: 4px;
  transition: border-color 0.2s;

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
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--color-primary-500);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: var(--color-primary-600);
  color: var(--color-primary-50);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: var(--color-primary-700);
  }

  &:active {
    transform: scale(0.98);
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
    <CenteredContainer>
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
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="installment">Installment</option>
            <option value="investment">Investment</option>
          </Select>
          <Button type="submit">Add Transaction</Button>
        </Form>
      </FormContainer>
    </CenteredContainer>
  );
}

export default AddTransactionPage;
