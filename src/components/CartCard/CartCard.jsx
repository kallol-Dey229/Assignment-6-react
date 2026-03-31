import React from 'react';

const CartCard = ({ selectedCart, setSelectedCart, cartCount, setCartCount, totalPrice, setTotalPrice }) => {

    const handleCartDeleteBtn = (cart) => {
        const filteredCart = selectedCart.filter(selectedCart => selectedCart.name != cart.name);
        setSelectedCart(filteredCart);

        setCartCount(cartCount - 1);
        setTotalPrice(totalPrice - cart.numericPrice);
    }

    const handleProceedBtn = () => {
        setSelectedCart([]);
        setCartCount(0);
        setTotalPrice(0);
        alert(cartCount === 0 ? "no products selected": "removed all of the products");
    }
    return (

        <div>
            <div className='p-20 shadow m-30 rounded-4xl space-y-4'>
                <h2 className='text-xl font-bold'>Your Cart</h2>
                {
                    selectedCart.map((cart, index) => {
                        return <div key={index}>

                            <div className='flex items-center justify-between gap-6 p-8 rounded-2xl shadow'>
                                <div className='flex gap-2 '>
                                    <div className='justify-center items-center'>
                                        <img src={cart.icon} alt="" />
                                    </div>
                                    <div>
                                        <h2>{cart.name}</h2>
                                        <p>{cart.price}</p>
                                    </div>
                                </div>
                                <button className='btn text-red-500' onClick={() => handleCartDeleteBtn(cart)}>Remove</button>
                            </div>

                        </div>
                    })


                }
                <div className='flex justify-between mt-15'>
                    <p className='text-gray-700'>Total</p>
                    <h3 className='text-lg font-semibold'>{totalPrice}</h3>
                </div>
                <div className='mt-10'>
                    <button onClick={handleProceedBtn} className='btn btn-primary rounded-3xl w-full'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;