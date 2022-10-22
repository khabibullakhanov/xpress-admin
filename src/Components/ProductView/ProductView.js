import React, { useEffect, useState } from "react";
import "./ProductView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { useNavigate } from "react-router-dom";
const api = process.env.REACT_APP_API;

export function ProductView() {
  const navigate = useNavigate();
  const id = useLocation().pathname.split("/").pop();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [view, setView] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true))
    axios(`${api}/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setImages(JSON.parse(res.data.img) || "[]");
        dispatch(acLoading(false))
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false))
      });
  }, [id, api, dispatch]);


  // useEffect(() => {
  //     // dispatch(acLoading(true));
  //     axios("https://xpress.pandashop.uz/api/product", {
  //         headers: {
  //             token: "qev234-23fvg24-vg24tae",
  //         },
  //     })
  //         .then((res) => {
  //             setProduct(res.data);
  //             setImages(JSON.parse(res.data.img)  "[]")
  //             // dispatch(acLoading(false));
  //             console.log(JSON.parse(res.data.img))
  //             console.log(images);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //             // dispatch(acLoading(false))
  //         });
  // }, []);

  return (
    <>
      <div id="ProductView">
        <div id="Left">
          <figure>
            <img src={images[view]} alt="" />
          </figure>
          <div id="PV-Bottom">
            {images.map((img, index) => {
              return (
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
              );
            })}
          </div>
        </div>
        <div id="Right">
          <h2>Delete</h2>
        </div>
      </div>
    </>
  );
}