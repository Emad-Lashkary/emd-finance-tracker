import { IoMdHome } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
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

  &:hover {
    color: var(--color-primary-500);
    border-bottom: 1px solid;
    & > *:first-child {
      background-color: var(--color-primary-800);
    }
  }

  & > *:first-child {
    padding: 0.6rem;
    font-size: 1.2rem;
    border-radius: 40% 10% 40% 10%;
    width: 40%;
    height: auto;
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
    </Nav>
  );
}

export default NavLinks;
