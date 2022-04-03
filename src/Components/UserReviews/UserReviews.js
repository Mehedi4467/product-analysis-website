import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const UserReviews = ({ user }) => {
    const { image, name, review, rating } = user;

    return (
        <div className='shadow-lg mb-4 flex items justify-round w-9/12 mx-auto py-5 px-5 rounded-lg hover:shadow-xl'>

            <div className='w-3/12'>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg ' src={image} width='100px' alt="" />
                </div>
                <p className='text-lg text-center mt-4 text-blue-500'>{name}</p>
            </div>

            <div className='w-9/12'>
                <div className='text-center'>
                    <p className='text-justify text-zinc-500'>{review}</p>
                    <div className='flex justify-start items-center mt-4'>

                        {Array.from(Array(rating), (e, i) => {
                            return <StarIcon key={i} className='h-4 w-4 text-orange-500'></StarIcon>
                        })}
                        <p className='ml-3'>{rating} </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserReviews;