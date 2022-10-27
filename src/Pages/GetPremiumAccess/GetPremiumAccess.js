import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const course = useLoaderData();
    const { price, title, author, videoDuration, videos } = course;

    return (
        <div className='flex justify-center py-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure  className=' py-16 text-6xl font-semibold bg-red-50 text-red-400'>${price}</figure>
                <div className="card-body">
                    <h2 className="card-title">Course Name: {title}</h2>
                    <p>
                        Instructor: {author.name} <br></br>
                        Course Time: {videoDuration}<br></br>
                        Total Video: {videos}
                    </p>
                    <Link className='btn btn-active btn-error text-slate-50 my-3' to='/courses'> Go back to courses</Link>
                </div>
            </div>
        </div>
    );
};

export default GetPremiumAccess;