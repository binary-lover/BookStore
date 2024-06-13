import React from 'react'
import { Link } from 'react-router-dom'

function login() {
    return (
        <div className="">
            <dialog id="my_modal_3" className="modal backdrop-blur-sm">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    {/* email */}
                    <div className="mt-4 space-y-2">
                        <h4>Email</h4>
                        <input type="email" placeholder='Enter your Email' className="w-80 px-3 h-10 border rounded-md outline-none" />
                    </div>
                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <h4>Password</h4>
                        <input type="password" placeholder='Enter your Password' className="w-80 px-3 h-10 border rounded-md outline-none" />
                    </div>
                    {/* login button */}
                    <div className="flex justify-around items-center mt-4">
                        <button className="bg-pink-500 rounded-md text-white px-3 py-2 hover:bg-pink-700 duration-300">Login</button>
                        <p>
                            not Registered? <Link to={"/signup"} className="underline text-blue-500 cursor-pointer" onClick={() => setModalOpen(false)} >Signup</Link>
                        </p>
                    </div>

                </div>
            </dialog>
        </div>
    )
}

export default login
