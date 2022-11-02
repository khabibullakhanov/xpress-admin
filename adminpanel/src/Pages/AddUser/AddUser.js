import React from 'react'
import "./AddUser.css"
import { AddUserCrud } from '../../Components/AddUserCrud/AddUserCrud'

export function AddUser() {
    return (
        <div id="add-users">
            <h1>Add User</h1>
            <AddUserCrud/>
        </div>
    )
}
