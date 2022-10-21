import React, { useState } from "react";
import { AllProducts } from "../../Components/AllProducts/AllProducts";
import { ProductView } from "../../Components/ProductView/ProductView";
import "./Product.css";
export function Product() {

  const [openModal, setOpenModal] = useState(false)
  const [imgData, setImgData] = useState([])


  return (
    <div>
      <h1>ads</h1>
      <button
        onClick={(e) => {
          setOpenModal(!false);

        }}
      >Open Modaljj</button>
      <div className={openModal ? "product-inside open" : "product-inside"}>
        <form className="product_form">
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(!openModal);
            }}
          >
            X
          </button>
          <p>Add new Product</p>
          <label>
            <p>Name</p>
            <input type="text" />
          </label>
          <label>
            <p>Price</p>
            <input type="text" />
          </label>
          <label>
            <p>Quantity</p>
            <input type="text" />
          </label>
          <label>
            <p>About Product</p>
            <input type="text" />
          </label>
          <label id="product_select_img">
            <p>Select images</p>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple="multiple"
              onChange={(e) => {
                setImgData([...imgData, ...e.target.files]);
              }}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(false);
            }}
          >
            Add
          </button>
        </form>
      </div>
      <AllProducts />
    </div>
  )

}
