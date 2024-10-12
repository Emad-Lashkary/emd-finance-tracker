import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./UI/header/Header";
import ReportsPage from "./pages/reports/ReportsPage";
import AddTransactionPage from "./pages/add transaction/AddTransactionPage";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./UI/Footer";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-transaction" element={<AddTransactionPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
