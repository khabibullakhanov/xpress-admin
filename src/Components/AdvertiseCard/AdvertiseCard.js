import React from 'react'
import studentCap from "../../Assets/Icons/Vector (27).svg"
import saveIcon from "../../Assets/Icons/Vector (28).svg"
import dollarIcon from "../../Assets/Icons/Vector (29).svg"
import userIcon from "../../Assets/Icons/Vector (30).svg"
import "./AdvertiseCard.css"


export function AdvertiseCard() {
    return (
        <div id="advertise-container">
            <div id="advertise-container-left">
                <div id="advertise-first-card">
                    <div id="advertise-first-card-left">
                        <img src={studentCap} alt="" />
                        <p>Students</p>
                    </div>
                    <div id="advertise-first-card-right">
                        <h2>15</h2>
                    </div>
                </div>
                <div id="advertise-second-card">
                    <div>
                        <img src={saveIcon} alt="" />
                        <p>Works</p>
                    </div>
                    <div>
                        <h2>04</h2>
                    </div>
                </div>
            </div>
            <div id="advertise-container-right">
                <div id="advertise-third-card">
                    <div>
                        <img src={dollarIcon} alt="" />
                        <p>Budget</p>
                    </div>
                    <div>
                        <h2>$ 100</h2>
                    </div>
                </div>
                <div data-aos="fade-down" id="advertise-fourth-card">
                    <div>
                        <img src={userIcon} alt="" />
                        <p>Teachers</p>
                    </div>
                    <div>
                        <h2>2</h2>
                    </div>
                </div> 
            </div>
        </div>
    )
}
