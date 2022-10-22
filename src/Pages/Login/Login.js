import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form';
import { useSnackbar } from "notistack";
import { useDispatch } from 'react-redux';
import { acLoading } from '../../Redux/Loading';
import { acAdmin } from "../../Redux/Admin"
import axios from 'axios';

export function Login() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
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
                //   enqueueSnackbar(`${res.data.message} ${res.data.user.name} `, {
                //     variant: "success",
                //   });
                //   dispatch(acUser(res.data.user));
                //   dispatch(acLoading(false));
                if (chek) {
                    localStorage.setItem("admin", JSON.stringify(res.data))
                    dispatch(acAdmin(res.data));
                } else {
                    sessionStorage.setItem("admin", JSON.stringify(res.data))
                    dispatch(acAdmin(res.data));
                }
                enqueueSnackbar(res.response.data.message, {
                    variant: "success",
                });
            })
            .catch((err) => {
                console.log(err);
                enqueueSnackbar(err.response.data.message, {
                    variant: "error",
                });
                dispatch(acLoading(false));
            });

    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Here</h1>
                <input type="text"
                    {...register("login")}
                    placeholder='Enter your email address'
                    required
                    autoComplete="off"
                    autoCapitalize="off"
                />
                <input type="password"
                    {...register("password")}
                    placeholder='Enter your password'
                    required
                    autoComplete="off"
                    autoCapitalize="off"
                />
                <div className='remember'>
                    <label>
                        <input type="checkbox" {...register("chek")} />
                        Remember me
                    </label>
                    <a href="https://support.google.com/mail/#topic=7065107" >forget the password?</a>
                </div>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}