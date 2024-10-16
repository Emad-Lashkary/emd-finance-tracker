import styled from "styled-components";
import { hexToRgba } from "../../../helpers/helpers";

const TransactionItemComponent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
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
  & .amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const TypeIndicator = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px 6px;
  width: 80px;
  font-size: 12px;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.type) {
      case "income":
        return hexToRgba("#4caf50");
      case "expense":
        return hexToRgba("#f44336");
      case "installment":
        return hexToRgba("#2196f3");
      case "investment":
        return hexToRgba("#9c27b0");
      default:
        return "gray";
    }
  }};
  margin-left: 10px;
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

function TransactionItem({
  transaction,
  handleEditClick,
  handleDeleteTransaction,
}) {
  return (
    <TransactionItemComponent>
      <div>
        <Indicator type={transaction.type} />
        <span>{transaction.category}</span>
        <Description className="description">
          {transaction.description}
        </Description>
      </div>
      <div className="amount">
        <span>${transaction.amount.toFixed(2)}</span>
        <TypeIndicator type={transaction.type}>
          {transaction.type}
        </TypeIndicator>
      </div>
      <div>
        <DeleteButton onClick={() => handleDeleteTransaction(transaction.id)}>
          Delete
        </DeleteButton>
        <EditButton onClick={() => handleEditClick(transaction)}>
          Edit
        </EditButton>
      </div>
    </TransactionItemComponent>
  );
}

export default TransactionItem;
