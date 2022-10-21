import React, { useState, useEffect } from 'react'
import "./UserTable.css"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { acLoading } from '../../Redux/Loading';
import penIcon from "../../Assets/Icons/pen-Regular.svg"
import { useNavigate } from 'react-router-dom';
import myImg from "../../Assets/Images/photo_2022-06-16_20-17-34.jpg"

export function UserTable() {
    const [openModal, setOpenModal] = useState(false)
    const [imgData, setImgData] = useState([])
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users",)
            .then((res) => {
                dispatch(acLoading(true))
                setData(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const allData = localUsers.concat(data)

    return (
        <div id='user-table-container'>
            <div id='user-table-header-part'>
                <h2>Users List</h2>
                <div>
                    <button onClick={() => {
                        navigate("/addUser")
                    }}>Add New User</button>
                </div>
            </div>
            <div id='user-table-div'>
                <table>
                    <thead id='user-table-thead'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Addres</th>
                            <th>ZipCode</th>
                            <th></th>
                        </tr>
                    </thead>
                    {allData.map((item, index) => {
                        setTimeout(() => {
                            dispatch(acLoading(false))
                        }, 700)
                        return (
                            <tbody id='user-table-tbody'>
                                <tr>
                                    <td id='user-table-tbody-my-img'><img src={myImg} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.address.zipcode}</td>
                                    {/* <td>{item.zipcode}</td> */}
                                    <div id="user-table-tbody-btns">
                                        <button onClick={() => {
                                            navigate(`/product/${item.id}`)
                                        }}><img src={penIcon} alt="" /></button>
                                    </div>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            <div className={openModal ? "product-inside open" : "product-inside"}>
                <form className="product_form">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenModal(!openModal);
                        }}
                    >
                        X
                    </button>
                    <p>Add new Product</p>
                    <label>
                        <p>Name</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Quantity</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>About Product</p>
                        <input type="text" />
                    </label>
                    <label id="product_select_img">
                        <p>Select images</p>
                        <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple="multiple"
                            onChange={(e) => {
                                setImgData([...imgData, ...e.target.files]);
                            }}
                        />
                    </label>
                    {imgData.map((item, index) => {
                        return (
                            <div>
                                <img src={URL.createObjectURL(item)} alt="" />
                            </div>
                        )
                    })}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenModal(false);
                        }}
                    >
                        Add
                    </button>
                </form>
            </div>
        </div >
    )
}
