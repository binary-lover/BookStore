import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login';

function Signup() {
    return (
        <>
            <div className="flex h-screen  justify-center items-center ">
                <div id="my_modal_1" className=" ">
                    <div className="modal-box border shadow-md rounded-3xl w-[25rem]">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <h4>Name</h4>
                            <input type="text" placeholder='Enter your Name' className="w-80 px-3 h-10 border rounded-md outline-none" />
                        </div>
                        {/* email */}
                        <div className="mt-4 space-y-2">
                            <h4>Email</h4>
                            <input type="email" placeholder='Enter your Email' className="w-80 px-3 h-10 border rounded-md outline-none" />
                        </div>
                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <h4>Password</h4>
                            <input type="password" placeholder='Enter Password' className="w-80 px-3 h-10 border rounded-md outline-none" />
                        </div>
                        {/* login button */}
                        <div className="flex justify-around items-center mt-4">
                        <button className="bg-pink-500 rounded-md text-white px-3 py-2 hover:bg-pink-700 duration-300">Sign up</button>
                        <p>
                        Already Registered? <span  className="underline text-blue-500 cursor-pointer"  onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</span>
                        <Login />
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
