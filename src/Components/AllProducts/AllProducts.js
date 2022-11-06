import React, { useEffect } from "react";
import "./AllProducts.css"
import axios from "axios";
import { acRelodeProduct } from "../../Redux/Products";
import { acLoading } from "../../Redux/Loading";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acSort, acSortedProduct } from "../../Redux/Sort";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export function AllProducts() {
    const navigate = useNavigate()
    const api = process.env.REACT_APP_API;
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products);
    const sortedpr = useSelector((state) => state.sortedProduct);
    // const enoughProduct = product.filter((item) => item.quantity <= 5).length
    const sort = useSelector((state) => state.sort);
    useEffect(() => {
        if (sort === "all") {
            dispatch(acSortedProduct(product));
        } else if (sort === "productHighToLow") {
            const productHighToLow = product.filter((item) => item.price);
            const sortHighToLow = productHighToLow.sort((a, b) => {
                return b.price - a.price;
            });
            dispatch(acSortedProduct(sortHighToLow));
        } else if (sort === "priceLowToHigh") {
            const priceLowToHigh = product.filter((item) => item.price);
            const sortPriceLowToHigh = priceLowToHigh.sort((a, b) => {
                return a.price - b.price;
            });
            dispatch(acSortedProduct(sortPriceLowToHigh));
        } else if (sort === "sortByView") {
            const sortByView = product.filter((item) => item.view);
            const sortedByView = sortByView.sort((a, b) => {
                return b.view - a.view;
            });
            dispatch(acSortedProduct(sortedByView));
        } else if (sort === "recentlyAdded") {
            const recentlyAdded = product.filter((item) => item.id);
            const sortRecentlyAdded = recentlyAdded.sort((a, b) => {
                return b.id - a.id;
            });
            dispatch(acSortedProduct(sortRecentlyAdded));
        }
    }, [product, sort, dispatch]);

    return (
        <>

            <div id="all-products-content">
                <div id="sort-all-product-container">
                    <select
                        onChange={(e) => {
                            dispatch(acSort(e.target.value));
                        }}
                    >
                        <option value="all">All</option>
                        <option value="productHighToLow">Price: high to low</option>
                        <option value="priceLowToHigh">Price: low to high</option>
                        <option value="sortByView">Sort by view</option>
                        <option value="receAdded">Recently added</option>
                    </select>

                </div>
                <div data-aos="fade-down" id="all-products-content-inside">
                    {sortedpr.map((item, index) => {
                        const imagess = JSON.parse(item.img || "[]")[0];
                        return (
                            <div key={item.id}>
                                <div
                                    style={item.img === [] ? { diplay: "none" } : {}}
                                    id="product-content-item">
                                    <figure
                                        onClick={() => {
                                            navigate(`/product/${item.id}`);
                                        }}
                                    >
                                        <img src={imagess} alt="" />
                                    </figure>
                                    <div id="product-content-item-bottom">
                                        <p>
                                            <span>{index + 1}.    </span>
                                            <span>{item.name}</span>
                                        </p>
                                        <div>
                                            <p>
                                                {item.quantity <= 5 ? "Product Doesn't enough" : "Products Don't enough"}
                                            </p>
                                            <p>
                                                {item.quantity <= 5 ? <ClearIcon style={{ color: "red", fontWeight: "800" }} /> : <CheckIcon style={{ color: "green", fontWeight: "800" }} />}
                                            </p>
                                        </div>
                                        <div>
                                            <p>Ads :</p>
                                            <input
                                                type="checkbox"
                                                checked={item.ads ? true : false}
                                                onClick={() => {
                                                    console.log(item.ads);
                                                    dispatch(acLoading(true));
                                                    axios(`${api}/ads/open`, {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type": "application/json",
                                                            token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
                                                            id: item.id,
                                                        },
                                                    })
                                                        .then((res) => {
                                                            console.log(item.id);
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}
