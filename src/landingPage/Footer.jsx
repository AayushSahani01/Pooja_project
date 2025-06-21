import React from 'react';

const Footer = () => {
    return (
        <div className='p-2 m-2 gap-5 '>
        <div className='grid grid-cols-2'>
            <div className=''>
                <h1 className='text-center text-3xl font-bold'>Pooja Designer Boutique</h1>
                <p className='p-4 m-3 font-light text-gray-500 font-serif'>Visit us at our Boutique shop in Noida to discover the perfect outfit for any occasion.</p>
                <input type="text" value=""placeholder='Please enter your email...!' className='border border-gray-400 rounded-sm p-4 m-2   w-3/4'/>
                <button type="submit" className='border border-gray-500 rounded-sm p-4 m-3 bg-stone-950 text-white font-bold'>Subscribe</button>

                {/* <p>Copyright © 2023 Pooja Designer Boutique</p> */}
            </div>
            <div className=' m-2 px-48 flex-wrap  grid grid-cols-2 text-xl font-semibold'>
            <div className='flex flex-row justify-between'>
                <div className='grid grid-cols-1'>
                    <div >
                    Blog
                </div>
                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Contract
                </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div >
                    Support
                </div>
                <div>
                    Policy
                </div>
                <div>
                    visit-Us
                </div>
                <div>
                    Shopping
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default Footer;
