import React from 'react';
import Ball from '../../image/ball-image.png';
const Home = () => {
    return (
        <div className='flex-none md:flex justify-evenly mt-10'>
            <div className='ball-info text-justify md:w-1/2'>
                <h2 className='text-4xl mt-10 text-blue-500 font-bold'>Adidas Official 2022 World Cup Ball</h2>
                <h2 className='text-4xl mt-5 text-black font-bold'>Get Up With The World Cup</h2>
                <div className='mt-10 w-full'>
                    <p className='text-zinc-400'>Adidas just officially revealed the brand-new Al Rihla 2022 World Cup football, confirming that it would be available exclusive through Adidas stores until April 12, 2022. The full release, including independent retailers, will therefore take place on April 13.</p>

                    <div className='mt-10 flex justify-center'>
                        <button className='font-bold w-1/2 bg-blue-400 p-4 text-white rounded-lg hover:bg-blue-500'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='ball-image overflow-hidden md:w-1/2 flex justify-end'>
                <img className='md:hover:animate-spin' src={Ball} width='531px' height='531px' alt="world cup ball" />
            </div>
        </div>
    );
};

export default Home;