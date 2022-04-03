import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Ball from '../../image/ball-image.png';
import UserReviews from '../UserReviews/UserReviews';
const Home = () => {

    const [users, setUsers] = useUser([]);
    return (
        <div>
            <div className='grid md:flex justify-evenly mt-10'>
                <div className='ball-info md:text-justify md:w-1/2 px-4 order-2 md:order-1 text-center'>
                    <h2 className='text-2xl md:text-2xl lg:text-4xl mt-10 text-blue-500 font-bold'>Adidas Official 2022 World Cup Ball</h2>
                    <h2 className='text-2xl md:text-2xl lg:text-4xl mt-5 text-black font-bold'>Get Up With The World Cup</h2>
                    <div className='mt-10 w-full'>
                        <p className='text-zinc-400'>Adidas just officially revealed the brand-new Al Rihla 2022 World Cup football, confirming that it would be available exclusive through Adidas stores until April 12, 2022. The full release, including independent retailers, will therefore take place on April 13.</p>

                        <div className='mt-10 flex justify-center'>
                            <button className='font-bold w-1/2 bg-blue-400 p-4 text-white rounded-lg hover:bg-blue-500'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='ball-image overflow-hidden  lg:w-1/2 flex justify-center order-1 md:order-2 md:justify-end'>
                    <img className='md:hover:animate-spin' src={Ball} width='531px' height='531px' alt="world cup ball" />
                </div>
            </div>


            <div className='text-center mt-16'>
                <h1 className='text-4xl font-bold'>Customer Reviews ({users.slice(0, 3).length})</h1>
                <div className='mt-4'>
                    {users.slice(0, 3).map(user => <UserReviews key={user.id} user={user}></UserReviews>)}
                </div>
                <div className='mt-10 py-10'>
                    <Link to='/reviews' className='bg-blue-400 text-lg text-white px-10 py-4 rounded-lg hover:bg-blue-500'>See All Reviews</Link>
                </div>

            </div>


        </div>
    );
};

export default Home;