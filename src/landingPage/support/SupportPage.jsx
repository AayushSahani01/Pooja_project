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
       <Outlet />
       <div className='text-center p-16 m-0 bg-amber-200'>
        <h1>
          SupportPage Is Created!!
        </h1>
       </div>
       <Support />
       <Footer />
       <Qna />
     </>
  )
}

export default SupportPage