import React, { useEffect, useState } from "react";
import "./ProductView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { useNavigate } from "react-router-dom";
const api = process.env.REACT_APP_API;

export function ProductView({ products }) {
  const navigate = useNavigate();
  const id = useLocation().pathname.split("/").pop();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [view, setView] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true))
    axios(`${api}/product/${id}`, {
      headers: {
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        setProduct(res.data);
        dispatch(acLoading(false));
        setImages(JSON.parse(res.data.img))
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false))
      });
  }, []);


  const deleteItemFromApi = () => {
    // axios(`https://xpress.pandashop.uz/api/product/delete/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: "qev234-23fvg24-vg24tae",
    //   },
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // navigate("/product")
    window.location.reload()
  }

  console.log(product);
  return (
    <>
      {product.map((iteks, indeks) => {
                return (
                  <>
                    <p>{iteks.name}</p>
                  </>
                )
              })}
      {/* <div id="ProductView">
        <div id="product-view-header">
          <p onClick={() => {
            navigate(-1)
          }}>&#10554;</p>
        </div>
        <div id="ProductView">
          <div id="Left">
            <figure>
              <img src={images[view]} alt="" />
            </figure>
            <div id="PV-Bottom">
              {images.map((img, index) => {
                return (
                  <>
                    <figure
                      onClick={() => {
                        setView(index);
                      }}
                      key={index}
                    >
                      <span
                        style={
                          view === index ? { display: "none" } : { display: "flex" }
                        }
                      ></span>
                      <img src={img} alt="" />
                    </figure>
                  </>
                );
              })}
          

            </div>
          </div>
        </div>
        <div id="Right">
          <h2 onClick={(e) => {
            e.preventDefault();
            deleteItemFromApi()
          }}>Delete</h2>
        </div>
      </div> */}
    </>
  );
}