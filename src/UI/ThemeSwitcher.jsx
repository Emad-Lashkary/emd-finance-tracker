import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const StyledThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  margin-left: 1.8rem;

  & select {
    padding: 10px;
    font-size: 20px;
    border: 1px solid var(--color-primary-300);
    border-radius: 8px;
    background-color: var(--color-primary-200);
    cursor: pointer;

    & select:focus {
      outline: none;
      border-color: var(--color-primary-700);
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    & select {
      padding: 7px;
      font-size: 15px;

      background-color: var(--color-primary-500);
      cursor: pointer;

      & select:focus {
        outline: none;
        border-color: var(--color-primary-700);
      }
    }
  }
`;

function ThemeSwitcher() {
  const { changeTheme } = useTheme();

  return (
    <StyledThemeSwitcher>
      <select onChange={(e) => changeTheme(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="teal">Teal</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="brown">Brown</option>
        <option value="gray">Gray</option>
      </select>
    </StyledThemeSwitcher>
  );
}

export default ThemeSwitcher;
