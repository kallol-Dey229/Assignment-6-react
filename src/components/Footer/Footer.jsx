import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] p-30 text-white'>
                <div className='container flex justify-between gap-10'>
                    <div className='space-y-4'>
                        <h2 className='text-4xl'>DigiTools</h2>
                        <p>Premium digital tools for creators, <br />professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl'>Product</h4>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl'>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl'>Resources</h4>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-xl'>Social Links</h4>
                        <div className='flex gap-2'>
                            <p className='bg-white p-2 rounded-full text-black'><IoLogoInstagram /></p>
                            <p className='bg-white p-2 rounded-full text-black'><FaFacebook /></p>
                            <p className='bg-white p-2 rounded-full text-black'><FaXTwitter /></p>
                        </div>
                    </div>
                </div>
                <hr className='mt-20 text-gray-600' />


                <div className='flex justify-between mt-7'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>

                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;