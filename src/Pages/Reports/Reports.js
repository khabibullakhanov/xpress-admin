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
    return (
        <div>
            <div id="advertisementCard">
                <table className="orderCardTable">
                    <tbody className="adsTable">
                        <tr className="adsTh">
                            <th className="adsId">id</th>
                            <th className="ads10prots">image</th>
                            <th className="ads10prots">name</th>
                            <th className="ads8prots">price</th>
                            <th className="ads8prots">season</th>
                            <th className="ads10prots">size</th>
                            <th className="ads8prots">discaunt</th>
                            <th className="ads8prots">for whom</th>
                            <th>about</th>
                            <th className="adsId">ads</th>
                        </tr>

                        {ads.map((item, index) => {
                            // const image = JSON.parse(item.img);
                            return (
                                <tr key={index} className="adsTh">
                                    <td className="adsId">{}</td>
                                    <td className="adsImg">
                                        <figure className="adsTdFigure">
                                            <img src={JSON.parse(item.img)[0]} alt="" />
                                        </figure>
                                    </td>
                                    <td className="ads10prots">{item.name}</td>
                                    <td className="ads8prots">{item.price}</td>
                                    <td className="ads8prots">{item.season}</td>
                                    <td className="ads10prots">{item.size}</td>
                                    <td className="ads8prots">{item.discaunt}</td>
                                    <td className="ads8prots">{item.forWhom}</td>
                                    <td>{item.about}</td>

                                    <td className="adsId">
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
        </div>
    )
}
