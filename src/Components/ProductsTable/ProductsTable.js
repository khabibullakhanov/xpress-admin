import React from "react";
import "./ProductsTable.css";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";

export function ProductsTable() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

if(location === 283) {
  alert("asd")
}
  return (
    <div id="user-table-container">
      <div id="user-table-header-part">
        <h2>Products List</h2>
        <div>
          <button
            onClick={() => {
              navigate("/addUser");
            }}
          >
            Add New Product
          </button>
        </div>
      </div>
      <div id="orders-main-container">
        <table className="styled-table">
          <thead >
            <tr id="users-table-thead">
              <th>№</th>
              <th>Image</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Season</th>
              <th>Discount</th>
              <th>Edite</th>
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
                  <td>{index + 1}</td>
                  <td id="user-table-tbody-my-img">
                    <figure>
                      <img src={images} alt="" />
                    </figure>

                  </td>


                  <td>{item.name}</td>


                  <td>{item.cost}</td>

                  <td>{item.quantity}</td>
                  <td>{item.size}</td>
                  <td>{item.season}</td>
                  <td>{item.discaunt}</td>

                  <td >
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
