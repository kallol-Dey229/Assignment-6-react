import React from 'react';
import { PiLineVerticalThin } from 'react-icons/pi';
import { VscDebugStart } from 'react-icons/vsc';
import bannerImg from '../../assets/products/banner.png';
import bannerDotIcon from '../../assets/products/Group 5.png';

const Banner = () => {
    return (
        <div>
            <div className='flex gap-35 p-35'>
                <div className='left space-y-5 my-auto'>
                <div className='bg-blue-100 flex items-center pl-2 w-70 p-1 rounded-4xl gap-2'><img src={bannerDotIcon} alt="" /><p className='bg-linear-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent'>New: AI-Powered Tools Available</p></div>
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
                <img src={bannerImg} alt="" />
            </div>
            </div>

            <div className='flex p-15 justify-evenly items-center bg-linear-to-r from-purple-800 to-purple-600'>
                <div className='space-y-2'>
                    <h2 className='text-5xl font-bold text-white'>50K+</h2>
                    <p className='text-white'>Active Users</p>
                </div>
                <PiLineVerticalThin className='text-7xl text-white opacity-50' />
                <div className='space-y-2'>
                    <h2 className='text-5xl font-bold text-white'>200+</h2>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <PiLineVerticalThin className='text-7xl text-white opacity-50' />
                <div className='space-y-2'>
                    <h2 className='text-5xl font-bold text-white'>4.9</h2>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;