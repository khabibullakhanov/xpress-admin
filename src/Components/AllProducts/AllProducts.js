import React, { useEffect } from "react";
import "./AllProducts.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acSort, acSortedProduct } from "../../Redux/Sort";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export function AllProducts() {
    const navigate = useNavigate()
    // const api = process.env.REACT_APP_API;
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products);
    const sortedpr = useSelector((state) => state.sortedpr);
    const enoughProduct = product.filter((item) => item.quantity <= 5).length
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
                                    id="product-content-item"
                                    onClick={() => {
                                        navigate(`/product/${item.id}`);
                                    }}
                                >
                                    <figure>
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
