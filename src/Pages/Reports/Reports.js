import React from 'react'
import axios from "axios";
import "./Reports.css"
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acRelodeProduct } from "../../Redux/Products";

export function Reports() {
    const dispatch = useDispatch();
    const api = process.env.REACT_APP_API;
    const ads = useSelector((state) => state.ads);
    let a = 0;
    return (
        <div id="orders-main-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Season</th>
                        <th>Size</th>
                        <th>Discaunt</th>
                        <th>For whom</th>
                        <th>About</th>
                        <th>Ads</th>
                    </tr>
                </thead>

                <tbody>

                    {ads.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{(a += 1)}</td>
                                <td>
                                        <img src={JSON.parse(item.img)[0]} alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.season}</td>
                                <td>{item.size}</td>
                                <td>{item.discaunt}</td>
                                <td>{item.forWhom}</td>
                                <td>{item.about}</td>

                                <td>
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
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
