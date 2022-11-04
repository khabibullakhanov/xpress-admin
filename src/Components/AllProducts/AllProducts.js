import React, { useState } from "react";
import "./AllProducts.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../Components/Pagination/Pagination"

export function AllProducts() {
    const navigate = useNavigate()
    const product = useSelector((state) => state.products);

    return (
        <>
            <div id="all-products-content">
                <div data-aos="fade-down" id="all-products-content-inside">
                    {product.map((item, index) => {
                        const imagess = JSON.parse(item.img || "[]")[0];
                        return (
                            <div key={item.id}>
                                <div
                                    style={item.img === [] ? { diplay: "none" } : {}}
                                    id="product-content-item"
                                    onClick={() => {
                                        navigate(`/product/${item.id}`);
                                    }}
                                >
                                    <figure>
                                        <img src={imagess} alt="" />
                                    </figure>
                                    <p>
                                        <span>{index + 1}.    </span>
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
