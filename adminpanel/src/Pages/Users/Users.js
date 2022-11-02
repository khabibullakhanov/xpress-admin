import React from 'react'
import "./Users.css"
import { UserTable } from '../../Components/UsersTable/UserTable'

export function Users() {
    return (
        <div id='users-container'>
            <UserTable/>
        </div>
    )
}
