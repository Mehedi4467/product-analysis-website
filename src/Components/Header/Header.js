import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='py-6'>
            <nav className='w-full md:w-1/2 mx-auto'>
                <ul className='flex justify-around text-base font-semibold uppercase'>
                    <li><CustomLink to="/">Home</CustomLink></li>
                    <li><CustomLink to="/reviews">Reviews</CustomLink></li>
                    <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                    <li><CustomLink to="/blogs">Blogs</CustomLink></li>
                    <li><CustomLink to="/about">About</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;