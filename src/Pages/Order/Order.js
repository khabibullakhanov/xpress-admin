import React, { useState, useEffect } from "react";
import "./Order.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";


export function Order() {

  const dispatch = useDispatch()
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(acLoading(true))
    axios("https://xpress.pandashop.uz/api/order")
      .then((res) => {
        setOrders(res.data);
        console.log(orders);
        dispatch(acLoading(false))
      })
      .catch((err) => {
        dispatch(acLoading(false))
        console.log(err.response.data);
      });
  }, []);

  // orders.map(async (item) => {

  console.log(orders);
  // });
  const massiv = [orders]
  return (
    <div>

      {orders.map((item, index) => {
        // const orderinside = JSON.parse(item.orders || "[]")
        return (
          <div>
            <p>{index+1}</p>
            <p>{item.customer}</p>
            <p>{item.phone}</p>
            <p>{item.date}</p>
            <p>{item.orderID}</p>
            <p>{item.phone}</p>
            <p>{item.status}</p>
            <p>{item.total}</p>
          </div>
        )
      })}
    </div>
  )
}
