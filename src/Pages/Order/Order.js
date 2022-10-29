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
        dispatch(acLoading(false))
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false))
        console.log(err.response.data);
      });
  }, []);


  return (
    <div id="orders-main-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Phone</th>
            <th>OrderId</th>
            <th>Total</th>
            <th>Status</th>
            <th>Order Name</th>
            <th>Order Size</th>
            <th>Order For Whom</th>
            <th>Order Quantity</th>
            <th>Order Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            const orderinside = JSON.parse(item.orders || "[]")
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.customer}</td>
                  <td>{item.phone}</td>
                  <td>{item.orderID}</td>
                  <td>{item.total}</td>
                  <td>{item.status}</td>
                  {orderinside.map((iteks, indeks) => {
                    return (
                      <>
                          <td key={indeks}>{iteks.name}</td>
                          <td>{iteks.size}</td>
                          <td>{iteks.forWhom}</td>
                          <td>{iteks.quantity}</td>
                          <td>{iteks.price}</td>
                      </>
                    )
                  })}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
