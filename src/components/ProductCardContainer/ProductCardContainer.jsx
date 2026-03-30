import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardContainer = ({cardData}) => {
    return (
        <div>
            <div className='p-40'>
            <div className=''>
                    <div className='grid grid-cols-3 gap-7'>
                        {
                            cardData.map(pricing =><ProductCard key={pricing.id} pricing={pricing}></ProductCard>)
                        }
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ProductCardContainer;