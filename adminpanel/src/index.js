import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./Assets/Css/Global.css";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2500}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
);
