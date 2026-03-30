import React from 'react';

const CartCard = ({ selectedCart }) => {
    return (
        <div>
            {
                selectedCart.map()
            }
        </div>
    );
};

export default CartCard;