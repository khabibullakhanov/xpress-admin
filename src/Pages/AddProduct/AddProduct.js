import React from 'react'
import "./AddProduct.css"
import { AddProductsCrud } from '../../Components/AddProductsCrud/AddProductsCrud'

export function AddProduct() {
    return (
        <div id="add-users">
            <h1>Add User</h1>
            <AddProductsCrud/>
        </div>
    )
}
