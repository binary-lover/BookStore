import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Courses() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="h-screen flex justify-center items-center ">
          <div className=" modal-box dark:bg-slate-900 dark:text-white dark:border-[1px] dark:border-gray-500 p-4 px-6  dark:rounded-lg border shadow-md rounded-3xl md:w-[30rem]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-2xl">Contact Us</h3>
              {/* email */}
              <div className="mt-4 space-y-2 ">
                <h4>Name <span className="text-red-500">*</span></h4>
                <input type="text" placeholder='Enter your Email' className="w-[100%] px-3 h-10 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-500"  {...register("Name", { required: true })} />
                {errors.Name && <span className="block text-sm text-red-500">Pleaes Enter Email</span>}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <h4>Email <span className="text-red-500">*</span></h4>
                <input type="email" placeholder='Enter your Password' className="w-[100%] px-3 h-10 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-500"  {...register("email", { required: true })} />
                {errors.email && <span className="block text-sm text-red-500">Please Enter Password</span>}
              </div>
              {/* Messege */}
              <div className=" mt-16 space-y-2  ">
                <h4>Type Massage <span className="text-red-500">*</span></h4>
                <textarea id='message' placeholder="Type massage Here!" className="w-[100%] h-40 p-2 border-[1px] rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-500" {...register("massage", { required: true })}/>
                {errors.massage && <span className="block text-sm text-red-500">Please Type some Massage</span>}
              </div>
              {/* login button */}
              <div className="flex  mt-4">
                <button className="bg-blue-500 rounded-md text-white px-3 py-2 hover:bg-blue-700 duration-300">Send</button>
 
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Courses
