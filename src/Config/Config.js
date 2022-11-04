import { useEffect } from "react";
import axios from "axios";
import { acProducts } from "../Redux/Products";
import { acOrders } from "../Redux/Order";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../Redux/Loading";
import { acAds } from "../Redux/Ads";

export function Config() {
  const api = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const relodeProduct = useSelector((state) => state.relodeProduct);

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`${api}/product`, {
        headers: {
          token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
        },
      })
      .then((res) => {
        dispatch(acProducts(res.data));
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, api, relodeProduct]);

  useEffect(() => {
    axios
      .get(`${api}/order`, {
        headers: {
          token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
        },
      })
      .then((res) => {
        dispatch(acOrders(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, api, relodeProduct]);

  useEffect(() => {
    axios
      .get(`${api}/ads`, {
        headers: {
          token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
        },
      })
      .then((res) => {
        dispatch(acAds(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, api, relodeProduct]);

  return null;
}