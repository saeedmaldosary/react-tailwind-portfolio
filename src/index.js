import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#ff05cd",
    },
    secondary: {
      main: "#8873ef",
      contrastText: "#564899",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
