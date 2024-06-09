import React from 'react'
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom' 
import Courses from './courses/Courses';

function App() {
  return (

    <>
    {/* <Home />
    <Course /> */}
    <Routes>
      {/* if path is "/" or "home" then the route will be */}
      <Route path='/home' element = {<Home />} />
      <Route path='/'  element = {<Home />} />
      <Route path='/course' element = {<Courses/>} />
    </Routes>
    </>
  );
}

export default App
