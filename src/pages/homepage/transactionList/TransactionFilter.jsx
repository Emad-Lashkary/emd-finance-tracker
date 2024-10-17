import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 10px 5px;
    padding: 10px;
    border: none;
    background: var(--color-primary-300);
    color: var(--color-primary-900);
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
      background: var(--color-primary-500);
    }
  }

  button.active {
    background: var(--color-primary-600);
    color: var(--color-primary-50);
  }
`;

function TransactionFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const handleFilterChange = (newFilter) => {
    setSearchParams({ filter: newFilter });
  };

  return (
    <FilterContainer>
      <button
        onClick={() => handleFilterChange("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange("income")}
        className={filter === "income" ? "active" : ""}
      >
        Income
      </button>
      <button
        onClick={() => handleFilterChange("expense")}
        className={filter === "expense" ? "active" : ""}
      >
        Expense
      </button>
      <button
        onClick={() => handleFilterChange("installment")}
        className={filter === "installment" ? "active" : ""}
      >
        Installment
      </button>
      <button
        onClick={() => handleFilterChange("investment")}
        className={filter === "investment" ? "active" : ""}
      >
        Investment
      </button>
    </FilterContainer>
  );
}

export default TransactionFilter;
