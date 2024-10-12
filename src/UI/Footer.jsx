import styled from "styled-components";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin: 20px 0;
  background-color: var(--color-primary-900);
  color: var(--color-primary-100);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
    color: var(--color-primary-300);
  }

  p {
    margin: 0;
    color: var(--color-primary-100);
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: var(--color-primary-400);
  }
`;

const QuickLink = styled(Link)`
  display: block;
  margin-bottom: 8px;
  color: var(--color-primary-200);
  text-decoration: none;

  &:hover {
    color: var(--color-primary-100);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterColumn>
        <h4>Developer Contact</h4>
        <ContactItem>
          <FaPhone /> +98 935 063 3890
        </ContactItem>
        <ContactItem>
          <FaEnvelope /> emad.lashkar@gmail.com
        </ContactItem>
        <ContactItem>
          <FaLinkedin /> linkedin.com/in/emad-lashkary
        </ContactItem>
        <ContactItem>
          <FaGithub /> https://github.com/Emad-Lashkary
        </ContactItem>
      </FooterColumn>
      <FooterColumn>
        <h4>About EMD Finance Tracker</h4>
        <p>
          A simple and intuitive app to track your daily transactions,
          visualized through dynamic charts.
        </p>
      </FooterColumn>
      <FooterColumn>
        <h4>Quick Links</h4>
        <QuickLink to="/">Home</QuickLink>
        <QuickLink to="/add-transaction">Add transaction</QuickLink>
        <QuickLink to="/reports">Reports</QuickLink>
      </FooterColumn>
    </FooterContainer>
  );
}

export default Footer;
