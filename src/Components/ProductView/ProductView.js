// import React, { useEffect, useState } from "react";
// import "./ProductView.css";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { acLoading } from "../../Redux/Loading";
// import { useNavigate } from "react-router-dom";
// const api = process.env.REACT_APP_API;

// export function ProductView({ products }) {
//   const navigate = useNavigate();
//   const id = useLocation().pathname.split("/").pop();
//   const [product, setProduct] = useState([]);
//   const [images, setImages] = useState([]);
//   const [view, setView] = useState(0);
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(acLoading(true))
//     axios(`${api}/product/${id}`, {
//       headers: {
//         token: "qev234-23fvg24-vg24tae",
//       },
//     })
//       .then((res) => {
//         setProduct(res.data);
//         dispatch(acLoading(false));
//         setImages(JSON.parse(res.data.img))
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(acLoading(false))
//       });
//   }, []);


//   const deleteItemFromApi = () => {
//     // axios(`https://xpress.pandashop.uz/api/product/delete/${id}`, {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     token: "qev234-23fvg24-vg24tae",
//     //   },
//     // })
//     //   .then((res) => {
//     //     console.log(res.data);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//     // navigate("/product")
//     window.location.reload()
//   }

//   // console.log(JSON.parse(products) || "[]");
//   return (
//     <>
//       <div id="ProductView">
//         <div id="product-view-header">
//           <p onClick={() => {
//             navigate(-1)
//           }}>&#10554;</p>
//         </div>
//         <div id="ProductView">
//           <div id="Left">
//             <figure>
//               <img src={images[view]} alt="" />
//             </figure>
//             <div id="PV-Bottom">
//               {images.map((img, index) => {
//                 return (
//                   <figure
//                     onClick={() => {
//                       setView(index);
//                     }}
//                     key={index}
//                   >
//                     <span
//                       style={
//                         view === index ? { display: "none" } : { display: "flex" }
//                       }
//                     ></span>
//                     <img src={img} alt="" />
//                   </figure>
//                 );
//               })}

//             </div>
//           </div>
//         </div>
//         <div id="Right">
//           <h2 onClick={(e) => {
//             e.preventDefault();
//             deleteItemFromApi()
//           }}>Delete</h2>
//           {product.map((iten, indek) => {
//             return (
//               <>
//                 <p>{iten.name}</p>
//               </>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./ProductCard.css";
import deleteIcon from "../../Assets/Icons/trash.svg";
import editIcon from "../../Assets/Icons/pen-Light.svg";
import axios from "axios";
import { toast } from "react-toastify";

export function ProductView({ products }) {
  function deleteRow(id) {
    axios(`https://xpress.pandashop.uz/api/product/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="product_card_container">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Image</td>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Cost</td>
            <td>Discount</td>
            <td>Operation</td>
          </tr>
          {products.map((item) => {
            const images = JSON.parse(item.img || "[]")[0];
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <figure>
                    <img src={images} alt="" />
                  </figure>
                </td>
                <td>{item.name}</td>
                <td>{item.caunt}</td>
                <td>{item.price}$</td>
                <td>
                  {item.discaunt === "0"
                    ? Math.round(item.price / 100) * 10 + +item.price
                    : Math.round(
                        item.price -
                          (((item.price / 100) * 10 + +item.price) / 100) *
                            item.discaunt
                      )}
                  $
                </td>
                <td>{item.discaunt} </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteRow(item.id);
                    }}
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                  <button>
                    <img src={editIcon} alt="" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}