import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./Assets/Css/Global.css";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-left"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"
      transition={Flip}
      limit={2}
    />
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
