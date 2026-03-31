import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardContainer = ({cardData, cartCount, setCartCount, setSelectedCart, selectedCart, totalPrice, setTotalPrice}) => {
    return (
        <div>
            <div className='p-40'>
            <div>
                    <div className='grid grid-cols-3 gap-7'>
                        {
                            cardData.map(pricing =><ProductCard key={pricing.id} pricing={pricing} cartCount={cartCount} setCartCount={setCartCount} selectedCart={selectedCart} setSelectedCart={setSelectedCart} setTotalPrice={setTotalPrice} totalPrice={totalPrice}></ProductCard>)
                        }
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ProductCardContainer;