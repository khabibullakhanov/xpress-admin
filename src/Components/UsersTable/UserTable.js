import React, { useState, useEffect } from 'react'
import "./UserTable.css"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { acLoading } from '../../Redux/Loading';
import penIcon from "../../Assets/Icons/pen-Regular.svg"
import deleteIcon from "../../Assets/Icons/trash-Regular.svg"

export function UserTable() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users",)
            .then((res) => {
                dispatch(acLoading(true))
                setData(res.data);
                setTimeout(() => {
                    dispatch(acLoading(false))
                }, 700)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div id='user-table-container'>
            <div id='user-table-header-part'>
                <h2>Users List</h2>
                <div>
                    <button>Add New User</button>
                </div>
            </div>
            <div id='user-table-div'>
                <table>
                    <thead id='user-table-thead'>
                        <tr>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => {
                        return (
                            <tbody id='user-table-tbody'>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    {/* <td>{item.zipcode}</td> */}
                                    <div id="user-table-tbody-btns">
                                        <button><img src={penIcon} alt="" /></button>
                                    </div>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
