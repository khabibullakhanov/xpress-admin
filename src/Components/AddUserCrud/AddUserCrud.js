import React, { useState } from 'react'
import "./AddUserCard.css"
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

export function AddUserCrud() {
    const {enqueueSnackbar} = useSnackbar()

    const navigate = useNavigate()

    const [images, setImages] = useState([])

    const submitUserData = () => {
        navigate("/product")
        enqueueSnackbar(`Successfully saved`, {
            autoHideDuration: "2000",
            variant: "success",
        });
    }

    return (
        <>
        <form id='add-crud-form' onSubmit={submitUserData}>
            <div id="ad-user-crud-container">
                <div id="ad-user-crud-container-left">
                    <input type="text" placeholder='Type name...' />
                    <input type="number" placeholder='Type numer...' />
                    <input type="email" placeholder='type email...' />
                </div>
                <div id="ad-user-crud-container-right">
                    <input type="text" placeholder='Type address...' />
                    <input type="text" placeholder='Type cost...' />
                    <label style={images.length === 4 ? { display: "flex" } : {}}>
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
                        Add Image
                    </label>
                </div>
            </div>
            <div id="upload-images-container">
                {images.map((item, index) => {
                    return (
                        <>
                            <figure id="upload-images-crud">
                                <button onClick={() => {
                                    setImages(images.filter((item, i) => i !== index))
                                }}>X</button>
                                <img src={URL.createObjectURL(item)} alt="" />
                            </figure>

                        </>
                    )
                })}
                <label id="upload-images-crud-add-label" style={images.length === 5 ? { display: "none" } : {display:"flex"}}>
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
            <button id='ad-crud-btn'>Create User</button>
        </form>
        </>
    )
}
