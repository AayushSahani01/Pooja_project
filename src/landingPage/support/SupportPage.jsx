import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar'
import Support from '../Support'
import Footer from '../Footer'
import Qna from '../Qna'

const SupportPage = () => {
  return (
     <>
       <Navbar />
       <div className='text-center pt-20 m-0'>
        <h1 className='text-xl font-bold p-4 m-2'>
          Order's Details! 
        </h1>
        <h1 className='text-sm m-2'>
          Details here written
          </h1>
       </div>
       
       <Footer />
       <Qna />
     </>
  )
}

export default SupportPage