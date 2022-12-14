import React from 'react';
import { Link } from 'react-router-dom';

const StartLearning = () => {
    return (
        <div className='bg-sky-50 py-20'>
            <div className='flex flex-col lg:flex-row items-center mx-20 p-10 border border-sky-900 rounded-tl-3xl rounded-br-3xl'>
                <div className='text-start'>
                <h1 className='text-4xl font-bold pb-4 text-sky-900'>Transform access to education</h1>
                <p className='text-stone-400'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                </div>
                <div className='text-end w-full lg:w-1/2'>
                <Link className="btn btn-accent rounded-none mt-7 text-slate-50" to="/courses">Start Learning Today</Link>
                </div>
            </div>
        </div>
    );
};

export default StartLearning;