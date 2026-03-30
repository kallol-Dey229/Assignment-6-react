import React from 'react';
import { VscDebugStart } from 'react-icons/vsc';

const Banner = () => {
    return (
        <div className='flex gap-35 p-35'>
            <div className='left space-y-5 my-auto'>
                <div className='bg-blue-100 flex items-center pl-2 w-70 p-1 rounded-4xl gap-2'><img src="/src/assets/Group 5.png" alt="" /><p className='bg-linear-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent'>New: AI-Powered Tools Available</p></div>
                <h1 className='text-7xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br /> Explore Products
                </p>
                <div className='flex gap-2 mt-10'>
                    <button className='btn btn-primary rounded-3xl'>Explore Products</button>
                    <button className='btn btn-primary btn-outline rounded-3xl'><VscDebugStart /> Watch Demo</button>
                </div>
            </div>

            <div className="right">
                <img src="/src/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;