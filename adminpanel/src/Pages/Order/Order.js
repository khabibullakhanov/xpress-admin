import React, { useState, useEffect } from "react";
import "./Order.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { acOpenModal } from "../../Redux/OpenModal"


export function Order() {
  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.openModal)
  const [orderInside, setOrderInside] = useState([])
  const orders = useSelector((state) => state.orders);

  // useEffect(() => {
  //   dispatch(acLoading(true))
  //   axios("https://xpress.pandashop.uz/api/order")
  //     .then((res) => {
  //       setOrders(res.data);
  //       dispatch(acLoading(false))
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       dispatch(acLoading(false))
  //       console.log(err.response.data);
  //     });
  // }, []);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "modal activ") {
        dispatch(acOpenModal(false))
      }
    });
  });

  const moreInfo = (item) => {
    dispatch(acOpenModal(true))
    setOrderInside(JSON.parse(item.orders));
  };

  // const moreOrders = [...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders, ...orders]

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
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.customer}</td>
                <td>{item.phone}</td>
                <td>{item.orderID}</td>
                <td>{item.total}</td>
                <td>{item.status}</td>
                <td id="see-order-td"
                  onClick={() => {
                    moreInfo(item, index)
                  }}
                >See Order <RemoveRedEyeIcon /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className={openModal ? "modal activ" : "modal"}>
        <div className={openModal ? "modal_body activ" : "modal_body"}>
          <button
            id="close_form"
            onClick={(e) => {
              e.preventDefault();
              dispatch(acOpenModal(false))
            }}
          >
            <CancelIcon />
          </button>
          {orderInside.map((itemOrder, orderIndex) => {
            return (
              <div key={orderIndex} className="mappedOrder">
                <figure className="mappedOrderFigure">
                  <img src={itemOrder.img} alt="" />
                </figure>
                <div className="mappedOrderInfo">
                  <p>Name: {itemOrder.name}</p>
                  <p>Size: {itemOrder.size}</p>
                  <p>For Whom: {itemOrder.forWhom}</p>
                  <p>Quantity: {itemOrder.quantity}</p>
                  <p>Price: {itemOrder.price}</p>
                  <p>Discaunt: {itemOrder.discaunt}</p>
                  <p>Season: {itemOrder.season}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}
