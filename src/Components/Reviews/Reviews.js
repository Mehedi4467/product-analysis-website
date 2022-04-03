import React from 'react';
import useUser from '../../hooks/useUser';
import UserReviews from '../UserReviews/UserReviews';

const Reviews = () => {
    const [users, setUsers] = useUser([]);
    return (
        <div className='mt-10'>
            {users.map(user => <UserReviews key={user.id} user={user}></UserReviews>)}
        </div>
    );
};

export default Reviews;