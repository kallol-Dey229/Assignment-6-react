import React from 'react';

const GetStaredCard = ({data}) => {
    const {badge, title, description,logo } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm relative">
                <div className="card-body space-y-4">
                    <p className='absolute top-4 right-4 bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>{badge}</p>
                    <div className='flex items-center justify-center mt-8'>
                        <div className='flex items-center justify-center bg-blue-50 rounded-full h-20 w-20'>
                            <img className='w-15 h-15' src={logo} alt="" />
                        </div>
                    </div>

                    <h3 className='text-2xl flex justify-center'>{title}</h3>
                    <p className='mx-auto text-[16px] text-gray-600'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default GetStaredCard;