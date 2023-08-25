import './index.scss'
import React from 'react'
// import { , Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import About from "../About";
import Home from "../Home";
import Contact from "../Contact";
import { Routes,Route } from "react-router-dom";




const Layout = () => {
  return (
    <div className="layout">
    <div className='app'>
    <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
   
        {/* <Outlet/>    */}
        
      
         <Home/>
         <About />
          {/* <Contact /> */}
      

        <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br/>
        <span className='Bottom-tag-html'>&lt;/html&gt;</span>
        </span>

     </div>
    </div>
    </div>
  )
}

export default Layout
