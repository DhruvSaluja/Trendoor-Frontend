import React, { useEffect, useState } from 'react'
import Navbar from '../components/adminComponents/Navbar'
import Sidebar from '../components/adminComponents/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from '../pages/adminPages/Add'
import List from '../pages/adminPages/List'
import Order from '../pages/adminPages/Order'
import Login from '../components/adminComponents/Login'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'
import {Outlet} from 'react-router-dom'


export const backendurl = import.meta.env.VITE_BACKEND_URL
export const currency="₹"

const Admin = () => {
  const [token ,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
    {token === "" ?<Login settoken={settoken}/>: <>
      <Navbar settoken={settoken}/>
      <hr/>
      <div className='flex w-full'>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          {/* <Routes>
            <Route path='/add' element={<Add token={token}/>} />
            <Route path='/orders' element={<Order token={token}/>} />
            <Route path='/list' element={<List token={token}/>} />
          </Routes> */}
          <Outlet context={{token}}/>
        </div>
      </div>
    </>}
   
    </div>
  )
}

export default Admin
