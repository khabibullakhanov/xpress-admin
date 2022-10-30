import React from 'react'
// import studentCap from "../../Assets/Icons/Vector (27).svg"
// import saveIcon from "../../Assets/Icons/Vector (28).svg"
// import dollarIcon from "../../Assets/Icons/Vector (29).svg"
// import userIcon from "../../Assets/Icons/Vector (30).svg"
import { useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import WidgetsIcon from '@mui/icons-material/Widgets';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "./AdvertiseCard.css"
import { useSelector } from 'react-redux'


export function AdvertiseCard() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.products);
    const order = useSelector((state) => state.orders);
    console.log(products);

    const HomeReturns = [
        {
            id: 0,
            id: "productsId",
            name: "Products:",
            show: products.length,
            icon: <WidgetsIcon style={{ color: "brown" }} />,
            path: "/product",
        },
        {
            id: 1,
            id: "priceId",
            name: "Total Price:",
            show: products.reduce((a, b) => a + b.caunt * b.price, 0),
            icon: <PriceChangeIcon style={{ color: "dodgerblue" }} />,
            path: "/ads"
        },
        {
            id: 2,
            id: "enoughId",
            name: "Enough Products:",
            show: products.filter((item) => item.caunt < 5).length,
            icon: <CategoryIcon style={{ color: "grey" }} />,
            path: "/ads"
        },
        {
            id: 3,
            id: "ordersId",
            name: "Orders: ",
            show: order.length,
            icon: <BorderColorIcon />,
            path: "/order"
        },
    ]

    return (
        <div id="advertise-container">
            {/* <div id="advertise-container-left">
                <div id="advertise-first-card">
                    <div id="advertise-first-card-left">
                        <img src={studentCap} alt="" />
                        <p>Students</p>
                    </div>
                    <div id="advertise-first-card-right">
                        <h2>{products.length}</h2>
                    </div>
                </div>
                <div id="advertise-second-card">
                    <div>
                        <img src={saveIcon} alt="" />
                        <p>Orders</p>
                    </div>
                    <div>
                        <h2>{order.length}</h2>
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
                        <h2>Pul Kerak 😢</h2>
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
            </div> */}
            {HomeReturns.map((item, index) => {
                const path = item.path
                return (
                    // <div className={item.className} key={index}>
                    //     <p>{item.name}</p>
                    //     <div className="howMuch">
                    //         <p>{item.show}</p>
                    //     </div>
                    // </div>
                    <div
                        key={index}
                        onClick={() => {
                            navigate(path)
                        }}
                        data-aos="fade-down" id={item.id}>
                        <div>
                            <p>{item.icon}</p>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <h2>{item.show}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
