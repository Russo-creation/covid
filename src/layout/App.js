import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";

import { BrowserRouter as Router } from "react-router-dom";

import Pages from "./Pages";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Pages />
      </Router>
    </ThemeProvider>
  );
}

export default App;
