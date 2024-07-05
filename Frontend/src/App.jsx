import React from 'react'
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom' 
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from  './Contact/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
   

  return (

    <>
    <div className="dark:bg-slate-900 dark:text-white">
      
    <Routes>
      {/* if path is "/" or "home" then the route will be */}
      <Route path='/home' element = {<Home />} />
      <Route path='/'  element = {<Home />} />
      <Route path='/course' element = {authUser?<Courses/>:< Navigate to="/Signup"/>} />
      <Route path='/Signup' element = {<Signup />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    <Toaster />
    </div>
    </>
  );
}

export default App
