import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from './Signup'

const InterUserFace = () => {
  return (
    <>
    <Signup />
     <div>
        <h1>login or signup route redirects here.</h1>
     </div>
     <Login />
     </>
  )
}

export default InterUserFace