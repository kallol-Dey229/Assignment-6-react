import React, { useState } from 'react';
import CardFeature from './CardFeature';
import { toast } from 'react-toastify';

const ProductCard = ({ pricing, setCartCount, cartCount, setSelectedCart, selectedCart, totalPrice, setTotalPrice }) => {
    const { name, tagType, icon, price, description, features, numericPrice } = pricing;
    const [isSelected, setIsSelected] = useState(false);

    const handleBuyBtn = () => {
        toast(`${name} is selected`);
        setIsSelected(true);
        setCartCount(cartCount + 1);
        setSelectedCart([...selectedCart, pricing]);
        setTotalPrice(totalPrice + numericPrice);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="absolute top-4 right-4">
                        <span className={`${tagType === 'Best Seller' ? "bg-yellow-100 text-yellow-700": tagType === 'Popular' ? "bg-blue-100 text-blue-600":"bg-green-100 text-green-600" } px-4 py-1 rounded-full text-sm font-semibold shadow`}>
                            {tagType}
                        </span>
                    </div>

                    <div className="space-y-3">
                        <img className='' src={icon} alt="" />
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p>{description}</p>
                        <span className="text-xl font-semibold">{price}</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature, index) => <CardFeature key={index} feature={feature}></CardFeature>)
                        }
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-3xl"
                            onClick={handleBuyBtn} disabled={isSelected ? true : false}>{isSelected === true ? "Selected" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;