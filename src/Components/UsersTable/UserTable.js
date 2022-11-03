import React, { useState, useEffect } from "react";
import "./UserTable.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import myImg from "../../Assets/Images/photo_2022-06-16_20-17-34.jpg";
import { IconButton } from "@mui/material";
const api = process.env.REACT_APP_API;

export function UserTable() {
  const product = useSelector((state) => state.products);
  const [openModal, setOpenModal] = useState(false);
  const [imgData, setImgData] = useState([]);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();



  return (
    <div id="user-table-container">
      <div id="user-table-header-part">
        <h2>Users List</h2>
        <div>
          <button
            onClick={() => {
              navigate("/addUser");
            }}
          >
            Add New User
          </button>
        </div>
      </div>
      <div id="orders-main-container">
        <table className="styled-table">
          <thead >
            <tr id="users-table-thead">
              <th>Name</th>
              <th>Email</th>
              <th>Addres</th>
              <th>ZipCode</th>
              <th>See</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => {
            const images = JSON.parse(item.img)[0];
              setTimeout(() => {
                dispatch(acLoading(false));
              }, 700);
              return (
                <tr key={index}>
                  <td id="user-table-tbody-my-img">
                        <figure>
                          <img src={images} alt="" />
                        </figure>
          
                  </td>


                  <td>{item.name}</td>


                  <td>{item.name}</td>

                  <td>{item.name}</td>

                  <td>
                    <IconButton
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div >
  );
}
