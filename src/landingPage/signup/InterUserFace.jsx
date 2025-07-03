import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from './Signup'

const InterUserFace = () => {
  return (
    <>
    <Signup />
     <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, beatae.</h1>
     </div>
     <Login />
     </>
  )
}

export default InterUserFace