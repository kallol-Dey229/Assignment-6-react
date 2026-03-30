import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      <div className="container mx-auto px-30 flex justify-between items-center">
        
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><span className='text-3xl font-bold bg-linear-to-r from-purple-800 to-purple-500 bg-clip-text text-transparent'>DigiTools</span></a>
        </div>

        <div className='mr-70'>
            <ul className='flex space-x-5'>
                <li><a href="">Products</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </div>

        <div className="flex-none space-x-1">
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
        </div>
      </div>
      
    </div>
    <button className='btn btn-ghost'>Login</button>
    <button className='btn btn-primary rounded-4xl'>Get started</button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;