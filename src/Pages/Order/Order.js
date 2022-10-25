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

  //   console.log(order);
  // });

  return (
    <div>
      {orders.map((item) => {
        const moreOrders = JSON.parse(item.orders);

        console.log(moreOrders);

        return moreOrders.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <p>{item.size}</p>
              <p>{item.price}</p>
              <p>{item.forWhom}</p>
              <p>{item.season}</p>
            </div>
          );
        });
      })}
    </div>
  )
}
