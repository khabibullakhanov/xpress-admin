import React from 'react'
import "./Login.css"
import { useForm } from 'react-hook-form';
import { useSnackbar } from "notistack";
import { useDispatch } from 'react-redux';
import { acLoading } from '../../Redux/Loading';

export function Login({ setLogin }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        // axios("https://xpress-db.herokuapp.com/api", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     data,
        //     timeout: 5000,
        //   })
        //     .then((res) => {
        //       enqueueSnackbar(`${res.data.message} ${res.data.user.name} `, {
        //         variant: "success",
        //       });
        //       dispatch(acUser(res.data.user));
        //       dispatch(acLoading(false));
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //       enqueueSnackbar(err.response.data.message, {
        //         variant: "error",
        //       });
        //       dispatch(acLoading(false));
        //     });

        const { login, password, chek } = data;

        if (login === "admin" && password === "admin") {

            if (chek === true) {
                localStorage.setItem("auth", JSON.stringify(data));
            }
            setLogin(true);
            setTimeout(() => {
                dispatch(acLoading(true));
            }, "1")
            setTimeout(() => {
                dispatch(acLoading(false));
            }, "1000")

        } else {
            enqueueSnackbar("Login or Password is incorrect ", {
                variant: "error",
            });
        }
        reset()
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <h1>Login Here</h1>
                <input type="text"
                    {...register("login")}
                    placeholder='Enter your email address'
                    required
                />
                <input type="password"
                    {...register("password")}
                    placeholder='Enter your password'
                    required
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