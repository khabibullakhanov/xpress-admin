import React, { useState, useEffect } from "react";
import "./Order.css";
import axios from "axios";
export function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios("https://xpress.pandashop.uz/api/order")
      .then((res) => {
        setOrders(res.data);
        console.log(orders);
      })
      .catch((err) => {
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
