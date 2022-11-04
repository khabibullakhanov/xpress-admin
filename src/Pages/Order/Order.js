import React, { useState, useEffect } from "react";
import "./Order.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { acOpenModal } from "../../Redux/OpenModal"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
// import { useSnackbar } from "notistack";
import IconButton from '@mui/material/IconButton';
import { acLoading } from "../../Redux/Loading";
import { toast } from "react-toastify";

export function Order() {
  // const enqueueSnackbar = useSnackbar()
  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.openModal)
  const [orderInside, setOrderInside] = useState([])
  const orders = useSelector((state) => state.orders);
  const api = process.env.REACT_APP_API;
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

  function deleteOrder(orderId) {
    dispatch(acLoading(true))
    axios(`https://xpress.pandashop.uz/api/order/delete/${orderId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "token",
      },
    })
    .then((res) => {
      window.location.reload()
      dispatch(acLoading(false))
        // enqueueSnackbar("Product succesfully deleted", { variant: "success" });
        toast.success("Products successfully deleted");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


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
            <th>Delete</th>
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
                >See Order <IconButton>
                    <RemoveRedEyeIcon />
                  </IconButton></td>
                <td><IconButton
                  onClick={() => {
                    deleteOrder(item.id)
                  }}
                >
                  <DeleteIcon style={{ color: "gray" }} />
                </IconButton></td>
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
