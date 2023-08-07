import './index.scss'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'


const Layout = () => {
  return (
    <div className='app'>
    <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet/>   
        <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br/>
        <span className='Bottom-tag-html'>&lt;/html&gt;</span>
        </span>

     </div>
    </div>
  )
}

export default Layout
