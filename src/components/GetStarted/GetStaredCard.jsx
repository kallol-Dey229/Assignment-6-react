import React from 'react';

const GetStaredCard = ({data}) => {
    const {badge, title, description,logo } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm relative">
                <div className="card-body space-y-4">
                    <p className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>{badge}</p>
                    <div className='flex items-center justify-center mt-8'>
                        <div className='flex items-center justify-center bg-blue-50 rounded-full h-20 w-20'>
                            <img className='w-15 h-15' src={logo} alt="" />
                        </div>
                    </div>

                    <h3 className='text-2xl font-semibold flex justify-center'>{title}</h3>
                    <p className='mx-auto text-center text-[18px] text-gray-600'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default GetStaredCard;