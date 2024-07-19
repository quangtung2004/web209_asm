import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { LoadingProvider } from "./contexts/Loading.tsx";
import { FlashProvider } from "./contexts/Flash.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext.tsx";

axios.defaults.baseURL = "http://localhost:3000";
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#F9F1E7", // Custom primary color
  //   },
  //   secondary: {
  //     main: "#dc004e", // Custom secondary color
  //   },
  // },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <FlashProvider>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </AuthProvider>
        </FlashProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
