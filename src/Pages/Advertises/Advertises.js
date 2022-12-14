import React from 'react'
import axios from "axios";
import "./Advertises.css"
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acRelodeProduct } from "../../Redux/Products";
import { toast } from "react-toastify";


export function Reports() {
    const dispatch = useDispatch();
    const api = process.env.REACT_APP_API;
    const ads = useSelector((state) => state.ads);
    let a = 0;
    return (
        <div id='all-table-container'>
            <table>
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
                                <td>{item.about.slice(0,15)}</td>

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
                                                    token: "f0de0e66-e6b6-5bed-9a9f-73459b6adbe7",
                                                    id: item.id,
                                                },
                                            })
                                                .then((res) => {
                                                    // console.log(res.data);
                                                    dispatch(acRelodeProduct());
                                                    dispatch(acLoading(false));
                                                    toast.success(res ? "Ads added" : "Ads deleted");
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
