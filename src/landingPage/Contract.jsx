import React from 'react';

const Contract = () => {
    return (
        <div className='flex flex-col text-center p-4 m-4'>
            <div className='text-3xl font-bold text-gray-800 mb-4'>
                <h1>What are you looking for?</h1>
            </div>
            <div className='flex flex-row p-6 m-4'>
              <input type="search" name="Search" id="" placeholder='Type here...'className='w-3/4 border border-stone-500 p-4 rounded-full' />           
             <button type="button" className='px-4 m-3 border border-stone-500 rounded-full text-2xl bg-gray-800 text-white w-1/6 h-12'>Search</button>
        </div>
        </div>
    )
};

export default Contract;
