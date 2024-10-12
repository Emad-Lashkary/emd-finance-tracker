import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./UI/header/Header";
import AddTransactionPage from "./pages/AddTransactionPage";
import ReportsPage from "./pages/reports/ReportsPage";
import HomePage from "./pages/Homepage";

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
      </Router>
    </AppContainer>
  );
}

export default App;
