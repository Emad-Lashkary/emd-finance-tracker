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
  &:active .description {
    position: absolute;
    display: block;
    opacity: 90%;
    z-index: 1000;
  }
  & .amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 10px;
    justify-items: center;

    & .amount {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &:active .description {
      display: none;
    }
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

const Description = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  color: var(--color-primary-800);
  background-color: var(--color-primary-200);
  border: 1px solid var(--color-primary-300);
  padding: 5px;
  border-radius: 4px;
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

const Buttons = styled.div`
  @media (max-width: 767px) {
    margin: 0 auto;
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

      <Buttons>
        <DeleteButton onClick={() => handleDeleteTransaction(transaction.id)}>
          Delete
        </DeleteButton>
        <EditButton onClick={() => handleEditClick(transaction)}>
          Edit
        </EditButton>
      </Buttons>
    </TransactionItemComponent>
  );
}

export default TransactionItem;
