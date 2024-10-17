import { useEffect, useState } from "react";
import styled from "styled-components";
import useTransactions from "../../../hooks/useTransactions";
import useModal from "../../../hooks/useModal";
import Modal from "../../../UI/Modal";
import EditTransactionForm from "../EditTransactionForm";
import TransactionFilter from "./TransactionFilter";
import { useSearchParams } from "react-router-dom";
import TransactionItem from "./TransactionItem";

const ListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
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

  @media (max-width: 767px) {
    height: 700px;
  }
`;

function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions(); // include deleteTransaction
  const { isShowing, toggle, modalRef } = useModal();
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchParams] = useSearchParams();
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const filter =
      searchParams.get("filter") === "all"
        ? transactions
        : transactions.filter(
            (transaction) => transaction.type === searchParams.get("filter")
          );
    setFilteredTransactions(filter);
  }, [transactions, searchParams]); // re-run this effect when transactions or searchParams change

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    toggle();
  };

  const handleDeleteTransaction = (transactionId) => {
    deleteTransaction(transactionId);
  };

  return (
    <ListContainer>
      <h2>Transactions</h2>
      <TransactionFilter />
      {filteredTransactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          handleEditClick={handleEditClick}
          handleDeleteTransaction={handleDeleteTransaction} // pass down to item
        />
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
