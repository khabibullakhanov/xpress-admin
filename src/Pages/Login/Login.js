import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form';
// import { useSnackbar } from "notistack";
import { useDispatch } from 'react-redux';
import { acLoading } from '../../Redux/Loading';
import { acAdmin } from "../../Redux/Admin"
import axios from 'axios';
import vawe from "../../Assets/Images/wave.png"
import bgLogin from "../../Assets/Images/bg.svg"
import avatarLogin from "../../Assets/Images/avatar.svg"
import { toast } from "react-toastify";

export function Login() {
    const dispatch = useDispatch();
    // const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        const { login, password, chek } = data;

        axios("https://xpress.pandashop.uz/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                login,
                password,
            },
        })
            .then((res) => {
                if (chek) {
                    localStorage.setItem("admin", JSON.stringify(res.data))
                    dispatch(acAdmin(res.data));
                } else {
                    sessionStorage.setItem("admin", JSON.stringify(res.data))
                    dispatch(acAdmin(res.data));
                }
                // enqueueSnackbar(res.response.data.message, {
                //     variant: "success",
                // });
                toast.success(res.response.data.message);
            })
            .catch((err) => {
                console.log(err);
                // enqueueSnackbar(err.response.data.message, {
                //     variant: "error",
                // });
                toast.error(err.response.data.message);
                dispatch(acLoading(false));
            });
        reset()

    }

    return (
        <>
            <img className="wave" src={vawe} alt="" />
            <div className="container">
                <div className="img">
                    <img src={bgLogin} alt="" />
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img src={avatarLogin} alt="" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input"
                                    placeholder='Username'
                                    {...register("login")}
                                    required
                                    autoComplete="off"
                                    autoCapitalize="off"
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input"
                                    placeholder='Password'
                                    {...register("password")}
                                    required
                                    autoComplete="off"
                                    autoCapitalize="off"
                                />
                            </div>
                        </div>
                        <div className='remember'>
                            <label>
                                <input type="checkbox" {...register("chek")} />
                                <p>Remember me</p>
                            </label>
                            <a href="https://support.google.com/mail/#topic=7065107" >forget the password?</a>
                        </div>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}