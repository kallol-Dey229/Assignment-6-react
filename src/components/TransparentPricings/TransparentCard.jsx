import React from 'react';
import TransparentCardFeature from './TransparentCardFeature';

const TransparentCard = ({transparentPricing}) => {
    const {id, type, description, price, features} = transparentPricing;
    return (
        <div>
            <div className={`card w-96 ${type === 'Pro'? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"bg-base-100"} shadow-sm`}>
                <div className={`card-body ${id === 2 ? "text-white":"text-black"}`}>

                    <div className="space-y-3">
                        
                        <h2 className="text-3xl font-bold">{type}</h2>
                        <p>{description}</p>
                        <span className="text-xl font-semibold">{price}</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                           features.map((pricingFeature,index)=><TransparentCardFeature key={index} pricingFeature={pricingFeature}></TransparentCardFeature>) 
                        }
                    </ul>
                    <div className="mt-6">
                        <button className={`btn ${id === 2 ? "":"btn-primary"} btn-block rounded-3xl`}>{`${id === 1 ? "Get Started Free" : id === 2 ? "Start Pro Trial" : "Contact Sales"}`}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransparentCard;