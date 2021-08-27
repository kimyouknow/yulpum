import React from "react"
import Router from "./Components/Router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styled/GlobalStyles";
import { lightTheme } from "./Styled/theme";


function App() {
  return (
    <ThemeProvider theme={lightTheme} >
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
