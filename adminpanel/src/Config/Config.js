import { useEffect } from "react";
import axios from "axios";
import { acProducts } from "../Redux/Products";
import { acOrders } from "../Redux/Order";
import { useDispatch } from "react-redux";
import { acLoading } from "../Redux/Loading";

export function Config() {
    const api = process.env.REACT_APP_API;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(acLoading(true));
        axios
            .get(`${api}/product`, {
                headers: {
                    token: "qev234-23fvg24-vg24tae",
                },
            })
            .then((res) => {
                dispatch(acProducts(res.data));
                dispatch(acLoading(false));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [dispatch, api]);

    useEffect(() => {
        axios
            .get(`${api}/order`, {
                headers: {
                    token: "qev234-23fvg24-vg24tae",
                },
            })
            .then((res) => {
                dispatch(acOrders(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [dispatch, api]);

    return null;
}