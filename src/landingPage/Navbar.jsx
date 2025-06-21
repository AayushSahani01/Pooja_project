import React from 'react';

const Navbar = () => {
    return (
        <div className="Container p-0 m-0 rounded-lg shadow-lg fixed w-full h-fit bg-white z-10">
            <div className='row flex flex-row justify-evenly items-center  '>
                <div className="w-1/4">
                    <img src='https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg' alt='logo' className='w-18 h-14 rounded-full' />
                </div>
                <div className=" rounded-lg w-2/4  ">
                    <ul className="flex flex-row justify-evenly gap-x-8 text-[19px] items-center list-none">
                        <li>Home</li>
                        <li>About</li>
                        {/* <li>Contact</li> */}
                        <li>New Arrivals </li>
                        <li>Support</li>
                        <li>Shop</li>
                        <li>Weddings</li>
                        <li>New Collection</li>
                    </ul>
                </div>
            </div>
        </div>

    )
};

export default Navbar;
