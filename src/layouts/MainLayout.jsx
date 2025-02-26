import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col text-white w-full min-h-screen'>
      <Header/>
      <main className=' grow'>
        <div className="">
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout