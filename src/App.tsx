import { useState } from "react";
import logo from "./logo.svg";
import style from "./app.module.css";
import { NavBar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Expense from "./pages/Expense";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Box } from "@mui/system";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Box sx={{ marginBottom: "56px" }}>
                    <Routes>
                        <Route path='/' element={<NavBar />} />
                        <Route path='budgets' element={<NavBar />} />
                        <Route path='expenses' element={<Expense />} />
                    </Routes>
                </Box>
                <NavBar />
            </ThemeProvider>
        </Router>
    );
}

export default App;
