import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Its test</div>
    </ThemeProvider>
  );
}

export default App;
