import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import Login from './login';

function Logout() {
    // const islogin = localStorage.getItem('user');
    const [islogin, setIslog] = useState(localStorage.getItem('user') ? true : false);


    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            // localStorage.removeItem('user');
            setAuthUser({
                ...authUser,
                user: null
            });
            const theme = localStorage.getItem('theme');
            if (localStorage.getItem('user')) {
                if (theme === 'dark') {
                    toast.success('Logout successfully !',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
                else {


                    toast.success('Logout successfully !');

                }
            }

        } catch (error) {
            toast.error("Error in logout" + error.message)
        }
        localStorage.removeItem("user");
        // window.location.reload();
        setIslog(false);
    }

    return (
        <div onClick={handleLogout}>
            {/* <button className="bg-red-700 rounded-md text-white px-3 py-2 hover:bg-red-900 duration-300"
        >Logout</button> */}
            {
                // if islogin is true then show logout button else show Login button
                islogin ? <button className="bg-red-700 rounded-md text-white px-3 py-2 hover:bg-red-900 duration-300"  >Logout</button> : <div className="" >
                    <a className="bg-black text-white px-3 py-2 rounded-md mr-2 mt-2 hover:bg-slate-800 duration-300 cursor-pointer  " onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a>
                    <Login />
                </div>
            }

        </div>
    )
}

export default Logout
