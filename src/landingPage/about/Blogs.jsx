import React from 'react'
import Navbar from '../Navbar'

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className="p-12 bg-orange-100">
      <div className="p-3 m-4 text-center text-3xl font-medium font-sarif">
        <h1>Blogs POST Wriiten here</h1>
      </div>
      <div className="p-3 m-2 font-light text-xl border border-gray-500 rounded-xl">
        <p>
          Best Boutique In Noida, the boutique life goes and constantly creates
          buzz where buying and selling all happen. Choose a bridal collection
          or something simply stylish for daily wear; boutiques in Noida combine
          variety and quality with an ingredient called exclusivity.
          Personalized attention has been provided by many to make searching for
          even the minutest detail comfortable.
        </p>
      </div>
    </div>
    </>
  )
}

export default Blogs