import React, { use, useState } from 'react';
import CartCard from '../CartCard/CartCard';
import ProductCardContainer from '../ProductCardContainer/ProductCardContainer';

const Products = ({dataPromise, cartCount, setCartCount}) => {

    const cardData = use(dataPromise);
    const [selectedType, setSelectedType] =useState('products');
    const [selectedCart, setSelectedCart] = useState([]); 

    return (
        <div>
            <div className='full px-40 mt-20'>
                <div className='header mx-80 space-y-8 '>
                    <h2 className='text-5xl font-bold pl-4'>Premium Digital Tools</h2>
                    <p>Choose from our curated collection of premium digital products designed <br /><span className='flex justify-center'>to boost your productivity and creativity.</span></p>

                    <div className='flex justify-center gap-2'>
                        <button 
                        onClick={()=>setSelectedType('products')}
                        className={`btn ${selectedType === 'products' ? "btn-primary " :""} rounded-4xl`}>Products</button>
                        <button 
                        onClick={()=>setSelectedType('cart')}
                        className={`btn ${selectedType === 'cart' ? "btn-primary " :""} rounded-4xl`}>Cart({selectedCart.length})</button>
                    </div>
                </div>
                
            </div>

            {
                selectedType === 'products' ? (
                    <ProductCardContainer cardData={cardData} cartCount={cartCount} setCartCount={setCartCount} setSelectedCart={setSelectedCart} selectedCart={selectedCart}></ProductCardContainer>) : (<CartCard selectedCart={selectedCart} setSelectedCart={setSelectedCart} cartCount={cartCount} setCartCount={setCartCount} ></CartCard>)
            }
        </div>
    );
};

export default Products;