import React, { use } from 'react';
import GetStartedContainer from './GetStartedContainer';

const GetStared = ({GetStaredDataPromise}) => {
    const GetStaredData = use(GetStaredDataPromise);
    return (
        <div>

            <div className='full px-40 mt-20'>
                <div className='header mx-80 space-y-8 '>
                    <h2 className='text-5xl font-bold pl-8'>Get Started in 3 Steps</h2>
                    <p className='flex justify-center'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                
            </div>
            {
                <GetStartedContainer GetStaredData={GetStaredData}></GetStartedContainer>
            }
        </div>
    );
};

export default GetStared;