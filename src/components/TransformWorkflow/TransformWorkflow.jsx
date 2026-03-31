import React from 'react';

const TransformWorkflow = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-8'>
                <div className='full px-30 mt-20'>
                <div className='header mx-70 space-y-8 '>
                    <h2 className='text-4xl font-bold pl-4'>Ready to Transform Your Workflow?</h2>
                    <p className='px-8 mx-auto'>Join thousands of professionals who are already using Digitools to work smarter. <span className='flex justify-center'>Start your free trial today.</span></p>
                </div>
                
            </div>

            
            <div className='px-30 mt-20 mx-100 space-y-4'>
                <div className='mx-20 flex gap-3'>
                <button className='btn rounded-3xl'>Explore Products</button>
                <button className='btn btn-ghost btn-outline rounded-3xl'>View Pricing</button>
            </div>

            <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>

            </div>
        </div>
    );
};

export default TransformWorkflow;