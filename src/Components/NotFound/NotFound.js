import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../image/undraw_page_not_found_re_e9o6.svg';

const NotFound = () => {
    return (
        <div className='mt-20'>
            <div className=' flex justify-center'>
                <img src={NotFoundImage} width='500px' height='600px' alt="" />
            </div>
            <div className='flex justify-center mt-10'>
                <Link className='w-60 text-center bg-blue-400 p-4 rounded-lg text-white hover:bg-blue-500' to='/'>Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;