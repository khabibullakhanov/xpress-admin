import React, { useState, useEffect } from "react";
import { Api } from "../../Components/Api/Api";
import "./Product.css";
export function Product() {

  const [openModal, setOpenModal] = useState(false)
  const [imgData, setImgDta] = useState([])

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     if (e.target.className === "product-body") {
  //       setOpenModal(false)
  //     }
  //   })
  // })

  return (
    <div>
      {/* <Api /> */}
      <button
        onClick={(e) => {
          setOpenModal(!false);

        }}
      >Open Modal</button>
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
                setImgDta([...imgData, ...e.target.files]);
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
    </div>
  )

}
