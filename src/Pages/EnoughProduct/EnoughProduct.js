import React, { useEffect } from "react";
import "../Order/Order.css";
import { useSelector, useDispatch } from "react-redux";
import { acOpenModal } from "../../Redux/OpenModal"
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';


export function EnoughProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const product = useSelector((state) => state.products);
    const enoughProduct = product.filter((item) => item.quantity <= 5);
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.className === "modal activ") {
                dispatch(acOpenModal(false))
            }
        });
    });


    return (
        <div id="orders-main-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Season</th>
                        <th>Discount</th>
                        <th>Edite</th>
                    </tr>
                </thead>
                <tbody>
                    {enoughProduct.map((item, index) => {
                        const images = JSON.parse(item.img)[0];
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td id="user-table-tbody-my-img">
                                    <figure>
                                        <img src={images} alt="" />
                                    </figure>

                                </td>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>{item.size}</td>
                                <td>{item.season}</td>
                                <td>{item.discaunt}</td>
                                <td><IconButton
                                    onClick={() => {
                                        navigate(`/product/${item.id}`);
                                    }}
                                >
                                    <EditIcon style={{ color: "gray" }} />
                                </IconButton></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
