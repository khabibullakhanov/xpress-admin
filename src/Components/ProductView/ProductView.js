import React, { useEffect, useState } from "react";
import "./ProductView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { useNavigate } from "react-router-dom";
const api = process.env.REACT_APP_API;

export function ProductView() {
    const navigate = useNavigate()
    const id = useLocation().pathname.split("/").pop();
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [view, setView] = useState(0);
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        axios(`${api}/product/${id}`)
            .then((res) => {
                setProduct(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, api, dispatch]);








    useEffect(() => {
        // dispatch(acLoading(true));
        axios("https://xpress.pandashop.uz/api/product", {
            headers: {
                token: "qev234-23fvg24-vg24tae",
            },
        })
            .then((res) => {
                setProduct(res.data);
                setImages(JSON.parse(res.data.img) || "[]")
                // dispatch(acLoading(false));
                console.log(JSON.parse(res.data.img))
                console.log(images);
            })
            .catch((err) => {
                console.log(err);
                // dispatch(acLoading(false))
            });
    }, []);

    return (
        <>
            <div id="Product">
                <div id="ProductCards">
                    {data.map((item, index) => {
                        const imagess = JSON.parse(item.img || "[]")[0];
                        return (
                            <div
                                id="product-card"
                                key={index}
                                onClick={() => {
                                    navigate(`/product/${item.id}`);
                                }}
                            >
                                <figure>
                                    <img src={imagess} alt="" />
                                </figure>
                                <span>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </span>
                            </div>
                        );
                    })}

                </div>
            </div>

        </>
    )
}
