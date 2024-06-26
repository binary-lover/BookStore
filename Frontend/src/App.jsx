import React from 'react'
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom' 
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from  './Contact/Contact'

function App() {
  return (

    <>
    <div className="dark:bg-slate-900 dark:text-white">
      
    <Routes>
      {/* if path is "/" or "home" then the route will be */}
      <Route path='/home' element = {<Home />} />
      <Route path='/'  element = {<Home />} />
      <Route path='/course' element = {<Courses/>} />
      <Route path='/Signup' element = {<Signup />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    </div>
    </>
  );
}

export default App
