import { useState } from "react";
import styled from "styled-components";
import useTransactions from "../../hooks/useTransactions";
import useModal from "../../hooks/useModal";
import Modal from "../../UI/Modal";
import EditTransactionForm from "./EditTransactionForm";

const ListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  overflow-y: scroll;
  margin: 20px 0;
  padding: 20px;
  background: var(--color-primary-100);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.9s ease-in-out;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  -ms-overflow-style: none;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary-700) transparent;
`;

const TransactionItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 10px;
  border-bottom: 1px solid var(--color-primary-400);
  position: relative;

  & > :nth-child(3) {
    justify-self: end;
  }

  &:hover .description {
    position: absolute;
    display: block;
    opacity: 50%;
    background: none;
    border: none;
    z-index: 1000;
  }
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case "income":
        return "green";
      case "expense":
        return "red";
      case "installment":
        return "blue";
      case "investment":
        return "purple";
      default:
        return "gray";
    }
  }};
  margin-right: 10px;
`;

const Description = styled.span`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const EditButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: var(--color-primary-600);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-700);
  }
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: var(--color-primary-400);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-500);
  }
`;

function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions();
  const { isShowing, toggle, modalRef } = useModal();
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    toggle();
  };

  return (
    <ListContainer>
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id}>
          <div>
            <Indicator type={transaction.type} />
            <span>{transaction.category}</span>
            <Description className="description">
              {transaction.description}
            </Description>
          </div>
          <span>${transaction.amount.toFixed(2)}</span>
          <div>
            <DeleteButton onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </DeleteButton>
            <EditButton onClick={() => handleEditClick(transaction)}>
              Edit
            </EditButton>
          </div>
        </TransactionItem>
      ))}
      <Modal isShowing={isShowing} hide={toggle} modalRef={modalRef}>
        {selectedTransaction && (
          <EditTransactionForm
            transaction={selectedTransaction}
            onClose={toggle}
          />
        )}
      </Modal>
    </ListContainer>
  );
}

export default TransactionList;
