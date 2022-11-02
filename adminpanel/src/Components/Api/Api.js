import React, { useEffect, useState } from "react";
import axios from "axios";
const api = process.env.REACT_APP_API;

export function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios(`${api}/product`, {
            headers: {
                token: "qev234-23fvg24-vg24tae",
            },
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div>
                Api Iwlaadi
            </div>
        </>
    );
}