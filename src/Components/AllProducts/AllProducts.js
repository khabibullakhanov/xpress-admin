import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./AllProducts.css"
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const api = process.env.REACT_APP_API;

export function AllProducts() {
    const navigate = useNavigate()
    const id = useLocation().pathname.split("/").pop();
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(acLoading(true));
        axios("https://xpress.pandashop.uz/api/product", {
            headers: {
                token: "qev234-23fvg24-vg24tae",
            },
        })
            .then((res) => {
                setProduct(res.data);
                dispatch(acLoading(false));
            })
            .catch((err) => {
                console.log(err);
                dispatch(acLoading(false))
            });
    }, []);



    return (
        <>
            <div id="all-products-content">
                <div data-aos="fade-down" id="all-products-content-inside">
                    {product.map((item, index) => {
                        // const imagess = JSON.parse(item.img);
                        const imagess = JSON.parse(item.img || "[]")[0];
                        return (
                            <div key={item.id}>
                                <div
                                    style={item.img === [] ? {diplay:"none"}: {}}
                                    id="product-content-item"
                                    onClick={() => {
                                        navigate(`/product/${item.id}`);
                                    }}
                                >
                                    <figure>
                                        <img src={imagess} alt="" />
                                    </figure>
                                    <p>
                                        <span>{index+1}.    </span>
                                        <span>{item.name}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
                
            </div>
        </>
    )
}
