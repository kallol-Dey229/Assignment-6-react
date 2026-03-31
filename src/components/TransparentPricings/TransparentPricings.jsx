import React, { use } from 'react';
import TransparentCardContainer from './TransparentCardContainer';

const TransparentPricings = ({TransparentPricingPromise}) => {
    const TransparentPricing = use(TransparentPricingPromise);
    return (
        <div>
            <div className='full px-40 mt-20'>
                <div className='header mx-80 space-y-8 '>
                    <h2 className='text-5xl font-bold pl-4'>Premium Digital Tools</h2>
                    <p>Choose from our curated collection of premium digital products designed <br /><span className='flex justify-center'>to boost your productivity and creativity.</span></p>
                </div>
                
            </div>

            {
                <TransparentCardContainer TransparentPricing={TransparentPricing}></TransparentCardContainer>
            }
        </div>
    );
};

export default TransparentPricings;