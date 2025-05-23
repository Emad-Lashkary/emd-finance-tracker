import styled from "styled-components";

const Select = styled.select`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid var(--color-primary-200);
  border-radius: 8px;
  background-color: var(--color-primary-100);
  animation: fadeIn 0.9s ease-in-out;
`;

function SelectPeriod({ period, setPeriod }) {
  return (
    <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
      <option value="all">All Time</option>
      <option value="day">Last Day</option>
      <option value="week">Last Week</option>
      <option value="month">Last Month</option>
      <option value="year">Last Year</option>
    </Select>
  );
}

export default SelectPeriod;
