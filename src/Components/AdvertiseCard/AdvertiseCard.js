import React from 'react'
import studentCap from "../../Assets/Icons/Vector (27).svg"
import saveIcon from "../../Assets/Icons/Vector (28).svg"
import dollarIcon from "../../Assets/Icons/Vector (29).svg"
import userIcon from "../../Assets/Icons/Vector (30).svg"
import "./AdvertiseCard.css"


export function AdvertiseCard() {
    return (
        <div id="advertise-container">
            <div id="advertise-first-card">
                <div id="advertise-first-card-left">
                    <img src={studentCap} alt="" />
                    <p>Students</p>
                </div>
                <div id="advertise-first-card-right">
                    <h2>234</h2>
                </div>
            </div>
            <div id="advertise-second-card">
                <div>
                    <img src={saveIcon} alt="" />
                    <p>Students</p>
                </div>
                <div>
                    <h2>234</h2>
                </div>
            </div>
            <div id="advertise-third-card">
                <div>
                    <img src={dollarIcon} alt="" />
                    <p>Students</p>
                </div>
                <div>
                    <h2>234</h2>
                </div>
            </div>
            <div id="advertise-fourth-card">
                <div>
                    <img src={userIcon} alt="" />
                    <p>Students</p>
                </div>
                <div>
                    <h2>234</h2>
                </div>
            </div>
        </div>
    )
}
