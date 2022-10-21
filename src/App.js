import React, { useState, useEffect } from "react";
import { Router } from "./Router";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./Pages/Login/Login";
import { acLoading } from "./Redux/Loading";


const pass = { login: "admin", password: "admin" };
localStorage.setItem("server", JSON.stringify(pass));

export function App() {
  const loading = useSelector((state) => state.reLoading);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const server = JSON.parse(localStorage.getItem("server"));
  const auth = JSON.parse(localStorage.getItem("auth")) || {};

  useEffect(() => {
    if (server.login === auth.login && server.password === auth.password) {
      setLogin(true);
      setTimeout(() => {
        dispatch(acLoading(true));
      }, "1")
      setTimeout(() => {
        dispatch(acLoading(false));
      }, "1500")
    }
    return;
  }, []);


  return (
    <>
      {login ? <Router /> : <Login setLogin={setLogin} />}
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
