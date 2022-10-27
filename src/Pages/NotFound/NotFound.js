import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../assets/error.jpeg'

const NotFound = () => {
    return (
        <div className='text-center '>
            <p className='text-3xl font-bold my-5'>Page not Found</p>
            <div className='flex justify-center items-center'>
                <img style={{ height: '500px' }} src={Error} alt="" />
            </div>
            <Link className='btn btn-active btn-error text-slate-50 mt-5' to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFound;