import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./UI/header/Header";
import ReportsPage from "./pages/reports/ReportsPage";
import AddTransactionPage from "./pages/add transaction/AddTransactionPage";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./UI/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/about/About";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-transaction" element={<AddTransactionPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </AppContainer>
  );
}

export default App;
