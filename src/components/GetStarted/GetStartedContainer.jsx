import React from 'react';
import GetStaredCard from './GetStaredCard';

const GetStartedContainer = ({GetStaredData}) => {
    return (
        <div>
            <div className='p-40'>
                <div>
                    <div className='grid grid-cols-3 gap-7'>
                        {
                           GetStaredData?.map((data,index)=><GetStaredCard key={index} data={data}></GetStaredCard>) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedContainer;