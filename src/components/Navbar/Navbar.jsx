import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'

const Navbar = ({cartCount}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      
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
      <div className="relative flex items-center">
  <img className="w-6" src={cartImg} alt="" />

  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
    {cartCount}
  </span>
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