import React, { useState, useEffect } from 'react'
import "./AddUserCard.css"
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { acUserAddCrud, acUserDeleteCrud, acUserUpdateCrud } from '../../Redux/Crud'
import { acLoading } from '../../Redux/Loading'

export function AddUserCrud() {
    const dispatch = useDispatch();
    const userDatas = useSelector((state) => state.crud);
    const { enqueueSnackbar } = useSnackbar()
    const [images, setImages] = useState([])
    const [value, setValue] = useState([])
    const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");

    useEffect(() => {
        localStorage.setItem("userDatas", JSON.stringify(userDatas) || "[]")
    }, [userDatas]);


    const submitUserData = (e) => {
        alert(userDatas)
        console.log(value);
        e.preventDefault()
        setTimeout(() => {
            dispatch(acLoading(true));
        }, "1")
        setTimeout(() => {
            dispatch(acLoading(false));
        }, "1500")
        if (typeHendelSubmit === "Add") {
            const NowDate = new Date().getTime()
            const newUser = {
                id: NowDate,
                userIsm: e.target.name.value,
                userEmayl: e.target.email.value,
                userRaqam: e.target.number.value,
                userManzil: e.target.address.value,
                userNarx: e.target.cost.value,
                userRasm: e.target.images.files,
            }

            dispatch(acUserAddCrud(newUser))
            enqueueSnackbar(`${value.userName} successfully saved`, {
                autoHideDuration: "2000",
                variant: "success",
            });
        }
        // } else {
        //     dispatch(acUserUpdateCrud(value))
        //     setTypeHendelSubmit("Add User")
        //     setTimeout(() => {
        //         dispatch(acLoading(true));
        //     }, "1")
        //     setTimeout(() => {
        //         dispatch(acLoading(false));
        //     }, "1500")
        //     enqueueSnackbar(`${value.userName} successfully edited`, {
        //         autoHideDuration: "2000",
        //         variant: "success",
        //     });
        // }
    }



    return (
        <>

            <form id='add-crud-form' onSubmit={submitUserData}>
                <div id="ad-user-crud-container">
                    <div id="ad-user-crud-container-left">
                        <input

                            onChange={(e) => {
                                setValue({ ...value, userName: e.target.value })
                            }}
                            // value={value.userName}
                            name='name'
                            type="text"
                            placeholder='Type name...'
                            required
                        />
                        <input

                            onChange={(e) => {
                                setValue({ ...value, userNumber: e.target.value })
                            }}
                            // value={value.userNumber}
                            name='number'
                            type="number"
                            placeholder='Type numer...'
                            required
                        />
                        <input

                            onChange={(e) => {
                                setValue({ ...value, userEmail: e.target.value })
                            }}
                            // value={value.userEmail}
                            name='email'
                            type="email"
                            placeholder='type email...'
                            required
                        />
                    </div>
                    <div id="ad-user-crud-container-right">
                        <input

                            onChange={(e) => {
                                setValue({ ...value, userAddress: e.target.value })
                            }}
                            // value={value.userAddress}
                            name='adress'
                            type="text"
                            placeholder='Type address...'
                            required
                        />
                        <input

                            onChange={(e) => {
                                setValue({ ...value, userCost: e.target.value })
                            }}
                            // value={value.userCost}
                            name='cost'
                            type="text"
                            placeholder='Type cost...'
                            required
                        />
                        <label>
                            <input type="file"
                                disabled name='images'
                                accept='image/png, image/jpg image/jpeg'
                                multiple="multiple"
                                onChange={(e) => {
                                    setValue({ ...value, userImages: e.target.files })
                                    const MyFiles = [...images]
                                    for (let i = 0; i < e.target.files.length; i++) {
                                        if (MyFiles.length > 4) {
                                            MyFiles.push(e.target.files[i])
                                        } else {
                                            MyFiles.slice(0, 1)
                                            MyFiles.push(e.target.files[i])
                                        }
                                    }
                                    setImages(MyFiles)
                                }}
                            />
                            Add Image
                        </label>
                    </div>
                </div>
                <div id="upload-images-container">
                    {images.map((item, index) => {
                        return (
                            <>
                                <figure id="upload-images-crud">
                                    <button type='button' onClick={() => {
                                        setImages(images.filter((item, i) => i !== index))
                                    }}>X</button>
                                    <img src={URL.createObjectURL(item)} alt="" />
                                </figure>

                            </>
                        )
                    })}
                    {/* {
                        userDatas.map((user) => {
                            return (
                                <p>{user.userName}</p>
                            )
                        })
                    } */}
                    <label id="upload-images-crud-add-label" style={images.length === 5 ? { display: "none" } : { display: "flex" }}>
                        <input type="file"
                            accept='image/png, image/jpg image/jpeg'
                            multiple="multiple"
                            onChange={(e) => {
                                const MyFiles = [...images]
                                for (let i = 0; i < e.target.files.length; i++) {
                                    if (MyFiles.length > 4) {
                                        MyFiles.push(e.target.files[i])
                                    } else {
                                        MyFiles.slice(0, 1)
                                        MyFiles.push(e.target.files[i])
                                    }
                                }
                                setImages(MyFiles)
                            }}
                        />
                        +
                    </label>
                </div>
                <button id='ad-crud-btn'>{typeHendelSubmit}</button>
            </form>
        </>
    )
}
