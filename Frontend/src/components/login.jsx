import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo= {
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4001/user/login', userInfo)
        .then((response) => {
            console.log(response.data);
            if(response.data){const theme = localStorage.getItem('theme');
                if(theme === 'dark'){
                toast.success('user created successfully !',
                    {
                      style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                    }
                  );
                }
                else{
                    toast.success('user created successfully !');

                }
            }
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        )
        .catch((error) => {
            if(error.response){
                // toast.error(error.response.data.message);
                const theme = localStorage.getItem('theme');
                if(theme === 'dark'){
                toast.error(error.response.data.message,
                    {
                      style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                    }
                  );
                }
                else{
                    toast.error('error.response.data.message');

                }
            } 
        })
    }

    return (
        <div className="">
            <dialog id="my_modal_3" className="modal backdrop-blur-sm">
                <div className="modal-box dark:bg-slate-900 dark:text-white ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className="mt-4 space-y-2">
                            <h4>Email <span className="text-red-500">*</span></h4>
                            <input type="email" placeholder='Enter your Email' className="w-80 px-3 h-10 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border-gray-500"  {...register("email", { required: true })} />
                            {errors.email && <span className="block text-sm text-red-500">Pleaes Enter Email</span>}
                        </div>
                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <h4>Password <span className="text-red-500">*</span></h4>
                            <input type="password" placeholder='Enter your Password' className="w-80 px-3 h-10 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border-gray-500"  {...register("password", { required: true })} />
                            {errors.password && <span className="block text-sm text-red-500">Please Enter Password</span>}
                        </div>
                        {/* login button */}
                        <div className="flex justify-around items-center mt-4">
                            <button className="bg-pink-500 rounded-md text-white px-3 py-2 hover:bg-pink-700 duration-300">Login</button>
                            <p>
                                not Registered? <Link to={"/signup"} className="underline text-blue-500 cursor-pointer" onClick={() => setModalOpen(false)} >Signup</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default login
