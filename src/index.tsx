import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
