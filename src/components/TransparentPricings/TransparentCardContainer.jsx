import React from 'react';
import TransparentCard from './TransparentCard';

const TransparentCardContainer = ({TransparentPricing}) => {
    return (
        <div>
            <div className='p-40'>
            <div>
                    <div className='grid grid-cols-3 gap-7'>
                        {
                            TransparentPricing.map(transparentPricing=><TransparentCard key={transparentPricing.id} transparentPricing={transparentPricing}></TransparentCard>)
                        }
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TransparentCardContainer;