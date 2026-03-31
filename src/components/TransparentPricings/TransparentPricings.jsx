import React, { use } from 'react';
import TransparentCardContainer from './TransparentCardContainer';

const TransparentPricings = ({TransparentPricingPromise}) => {
    const TransparentPricing = use(TransparentPricingPromise);
    return (
        <div>
            <div className='full px-40 mt-20'>
                <div className='header mx-70 space-y-8 '>
                    <h2 className='text-5xl font-bold pl-4'>Simple, Transparent Pricing</h2>
                    <p className='flex justify-center text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                
            </div>

            {
                <TransparentCardContainer TransparentPricing={TransparentPricing}></TransparentCardContainer>
            }
        </div>
    );
};

export default TransparentPricings;