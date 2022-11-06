import React, { useState, useEffect } from "react";
import "./AddProductsCrud.css";
import axios from "axios";
// import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading"
import { NumericFormat } from "react-number-format";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";


export function AddProductsCrud() {

  const api = process.env.REACT_APP_API;
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  // const { enqueueSnackbar } = useSnackbar();
  const [typeHandleSubmit, setTypeHandleSubmit] = useState("Add Product")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    about: "",
    price: "",
    cost: "",
    quantity: "",
    discaunt: "",
    size: [],
    season: "qishgi",
    forWhom: "ayollar",
  });

  const inputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${api}/product/${id}`, {
      headers: {
        token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
      },
    })
      .then((res) => {
        dispatch(acLoading(false));
        setProduct(res.data);
        setTypeHandleSubmit("Edite Product");
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [id, api, dispatch]);

  const newproduct = JSON.stringify(product);



  function submitUserData(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; images.length > i; i++) {
      formData.append("img", images[i]);
    }
    formData.append("data", newproduct);

    if (typeHandleSubmit === "Add Product") {
      dispatch(acLoading(true));
      axios("https://xpress.pandashop.uz/api/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
        },
        data: formData,
      })
        .then((res) => {
          console.log(res.data);
          // enqueueSnackbar("Product succesfully added", { variant: "success" });
          toast.success("Product succesfully added");
          navigate("/product")
          dispatch(acLoading(false));
        })
        .catch((err) => {
          navigate("/product")
          dispatch(acLoading(false));
          toast.error("Product can't added");
          // enqueueSnackbar("Product not added", { variant: "error" });
          console.log(err.response.data.message);
        });
    } else if (typeHandleSubmit === "Edite Product") {
      const editedFormData = new FormData()
      editedFormData.append("imgData", imgData)
      for (let i = 0; imgData.length < i; i++) {
        editedFormData.append("img", imgData[i])
      }
      const editedData = JSON.stringify({
        name: product.name,
        price: product.price,
        season: product.season,
        size: product.size,
        forWhom: product.forWhom,
        discaunt: product.discaunt,
        about: product.about,
      });
      axios(`${api}/product/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
        },
        data: editedData,
      })
        .then(function (res) {
          console.log(res.data);
          navigate("/product")
          window.location.reload()
          // enqueueSnackbar("Product succesfully edited", { variant: "success" });
          toast.success("Product succesfully edited");
        })
        .catch(function (err) {
          console.log(err);
          navigate("/product")
          // enqueueSnackbar("Product can't edited", { variant: "error" });
          toast.error("Product can't edited");
        });
    }

  }

  return (
    <>
      <form id="add-crud-form" onSubmit={submitUserData}>
        <div id="ad-user-crud-container">
          <div id="ad-user-crud-container-left">
            <input
              onChange={inputChange}
              value={product.name}
              name="name"
              type="text"
              placeholder="Write name..."
              required
            />
            <input
              onChange={inputChange}
              value={product.about}
              name="about"
              type="text"
              placeholder="Write about..."
              required
            />
            <NumericFormat
              value={product.price}
              placeholder="Write price..."
              // format="+99 (8##) ### ####"
              suffix="$"
              maxLength="3"
              thousandSeparator=","
              allowemptyformatting="true"
              name="price"
              onValueChange={(values) => {
                const { value } = values;
                setProduct({ ...product, price: value });
              }}
            />
            <NumericFormat
              value={product.cost}
              placeholder="Write cost..."
              suffix="$"
              thousandSeparator=","
              allowemptyformatting="true"
              name="cost"
              onValueChange={(values) => {
                const { value } = values;
                setProduct({ ...product, cost: value });
              }}
            />
            <label
              id="upload-images-crud-add-label"
              style={imgData.length === 4 ? { pointerEvents: "none" } : {}}
            >
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple="multiple"
                onChange={(e) => {
                  setImages([...images, ...e.target.files]);
                  const MyFiles = [...imgData];
                  for (let i = 0; i < e.target.files.length; i++) {
                    if (MyFiles.length < 4) {
                      MyFiles.push(e.target.files[i]);
                    } else {
                      MyFiles.splice(0, 1);
                      MyFiles.push(e.target.files[i]);
                    }
                  }
                  setImgData(MyFiles);
                }}
              />
              Choose Image
            </label>
          </div>
          <div id="ad-user-crud-container-right">
            <input
              onChange={inputChange}
              value={product.quantity}
              name="quantity"
              type="number"
              placeholder="Quantity"
              required
            />
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={inputChange}
              placeholder="Size"
            />
            <NumericFormat
              value={product.discaunt}
              placeholder="Discount"
              suffix="%"
              allowemptyformatting="true"
              name="discaunt"
              onValueChange={(values) => {
                const { value } = values;
                setProduct({ ...product, discaunt: value });
              }}
            />

            {/* <p>Choose season</p> */}
            <select
              id="add-user-select-item"
              value={product.season}
              name="season"
              onChange={inputChange}
            >
              <option value="qishgi">Qishgi</option>
              <option value="bahorgi">Bahorgi</option>
              <option value="yozgi">Yozgi</option>
              <option value="kuzgi">Kuzgi</option>
            </select>
            {/* <p>For Whom</p> */}
            <select
              id="add-user-select-item"
              value={product.forWhom}
              name="forWhom"
              onChange={inputChange}
            >
              <option value="ayollar">Ayollar</option>
              <option value="erkaklar">Erkaklar</option>
              <option value="yoshbolalar">Yosh Bolalar</option>
              <option value="ssmirlar">Osmirlar</option>
            </select>
          </div>
        </div>
        <div id="upload-images-container">
          {imgData.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <figure id="upload-images-crud">
                    <button
                      type="button"
                      onClick={() => {
                        setImgData(imgData.filter((item, i) => i !== index));
                      }}
                    >
                      X
                    </button>
                    <img style={typeHandleSubmit === "Add Product" ? { display: "block" } : { display: "none" }} src={typeHandleSubmit === "Add Product" ? URL.createObjectURL(item) : {}} alt="" />
                    <img style={typeHandleSubmit === "Edite Product" ? { display: "block" } : { display: "none" }} src={typeHandleSubmit === "Edite Product" ? item : {}} alt="" />
                  </figure>
                </div>
              </div>
            );
          })}

        </div>
        <button id="ad-crud-btn">{typeHandleSubmit}</button>
      </form>
    </>
  );
}
