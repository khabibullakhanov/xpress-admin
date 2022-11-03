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
          token: "qev234-23fvg24-vg24tae",
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
          token: "qev234-23fvg24-vg24tae",
        },
      })
      .then((res) => {
        dispatch(acOrders(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, api]);

  useEffect(() => {
    axios
      .get(`${api}/ads`, {
        headers: {
          token: "qev234-23fvg24-vg24tae",
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