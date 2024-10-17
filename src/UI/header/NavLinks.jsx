import { IoMdHome } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsQuestionSquareFill } from "react-icons/bs";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  color: var(--color-primary-200);
  padding: 0.5rem 1rem;
  margin: 0;
  border: none;
  transition: color 0.3s ease;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--color-primary-500);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--color-primary-500);

    & > *:first-child {
      background-color: var(--color-primary-800);
      transition: background-color 0.3s ease;
    }
  }

  & > *:first-child {
    padding: 10px;
    font-size: 20px;
    border-radius: 40% 10% 40% 10%;
    width: 40%;
    height: auto;
    transition: background-color 0.3s ease;

    @media (max-width: 1000px) {
      width: auto;
    }
  }
  @media (max-width: 767px) {
    color: var(--color-primary-900);
  }
  & span {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

function NavLinks() {
  return (
    <Nav>
      <StyledLink to="/">
        <IoMdHome />
        <span>Home</span>
      </StyledLink>

      <StyledLink to="/add-transaction">
        <GrTransaction />
        <span>Add Transaction</span>
      </StyledLink>

      <StyledLink to="/reports">
        <TbReportSearch />
        <span>Reports</span>
      </StyledLink>

      <StyledLink to="/about">
        <BsQuestionSquareFill />
        <span>About</span>
      </StyledLink>
    </Nav>
  );
}

export default NavLinks;
