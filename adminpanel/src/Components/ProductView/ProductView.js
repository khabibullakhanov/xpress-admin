import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductView.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { IconButton } from '@mui/material';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from "notistack";
import {acRelodeProduct} from "../../Redux/Products.js"

export function ProductView() {
  const enqueueSnackbar = useSnackbar()
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [view, setView] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const api = process.env.REACT_APP_API;
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${api}/product/${id}`, {
      headers: {
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        setData(res.data);
        dispatch(acLoading(false));
        setImages(JSON.parse(res.data.img));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch, api, id]);

  const deleteItemFromApi = () => {
    axios(`${api}/product/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "qev234-23fvg24-vg24tae",
      },

    })
      .then((res) => {
        console.log(res.data);
        enqueueSnackbar("Product succesfully deleted", { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Product can't deleted", { variant: "error" });
        console.log(err);
      });
    navigate("/product")
    window.location.reload()
  }


  const AllData = [data];
  return (
    <>
      <div id="ProductView">
        <div id="viewfull">
          <div id="Left">
            <figure>
              <img
                id="transition-image" src={images[view]} alt="" />
            </figure>
            <div id="PV-Bottom">
              {images.map((img, index) => {
                return (
                  <figure
                    id="transition-image"
                    onClick={() => {
                      setView(index);
                    }}
                    key={index}
                  >
                    <span
                      style={
                        view === index
                          ? { display: "none" }
                          : { display: "flex" }
                      }
                    ></span>
                    <img src={img} alt="" />
                  </figure>
                );
              })}
            </div>
          </div>
          <div id="Right">
            <h2 id="about-product-header-content">About Product</h2>
            {AllData.map((item, indeks) => {
              return (
                <div key={indeks}>
                  <div id="product-view-div-content">
                    <h3>Name: <p>{item.name}</p></h3>
                    <h3>About: <p>{item.about}</p></h3>
                    <h3>Price: <p>{item.price}</p></h3>
                    <h3>Cost: <p>{item.cost}</p></h3>
                    <h3>Size: <p>{item.size}</p></h3>
                    <h3>Season: <p>{item.season}</p></h3>
                    <h3>Quantity: <p>{item.quantity}</p></h3>
                    <h3>Discaunt: <p>{item.discaunt === "0" ? (item.price / 100) * 10 + +item.price : Math.round(item.price - (((item.price / 100) * 10 + +item.price) / 100) * item.discaunt)}$</p></h3>
                    <h3>For Whom: <p>{item.forWhom}</p></h3>
                  </div>
                  <input
                    type="checkbox"
                    checked={item.ads ? true : false}
                    onChange={(e) => {
                      dispatch(acLoading(true));
                      axios(`${api}/ads/open`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          token: "sdgergerfd",
                          id: item.id,
                        },
                      })
                        .then((res) => {
                          console.log(res.data);
                          dispatch(acRelodeProduct());
                          dispatch(acLoading(false));
                        })
                        .catch((err) => {
                          console.log(err);
                          dispatch(acRelodeProduct());
                          dispatch(acLoading(false));
                        });
                    }}
                  />
                  <div id="botttom-item-edite-content">
                    <IconButton
                      onClick={() => {
                        deleteItemFromApi()
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </div>
                </div>
              )
            })}
            {/* <div id="topCard">
              <h2>{data.name}</h2>
              <form>
                <p id="s-name">size :</p>
                {sizeData.map((item, index) => {
                  const sizes = JSON.parse(item.PRsize || "[]");
                  return (
                    <div id="SisZeDiv" key={index}>
                    </div>
                  );
                })}
                {AllData.map((itemks) => {
                  return (
                    <button
                      type="button"
                      id="tanlshBTN">
                      Tanlash
                    </button>
                  );
                })}
              </form>
            </div>
            <div id="BottomCardFull">
              <h2>About</h2>
              <p id="AboutP">{data.about}</p>
              <span id="linebtn"></span>
              <Link to="/delivery" id="Abouth1btn">
                RELATED TAGS (TAGS)
              </Link>
              <span id="linebtn"></span>
              <Link to="/delivery" id="Abouth1btn">
                Comments
              </Link>
              <span id="linebtn"></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}