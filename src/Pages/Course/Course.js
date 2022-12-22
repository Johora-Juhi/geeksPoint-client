import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { image, title, author, ratings, description } = course;
    console.log(course)

    return (
        <div style={{width:'100%'}} className="card card-compact w-96 shadow-xl bg-base-200">
            <figure><img src={image} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-900">{title}</h2>
                <p><FaStar className='inline text-yellow-600 mr-2'></FaStar><FaStar className='inline text-yellow-600 mr-2'></FaStar><FaStar className='inline text-yellow-600 mr-2'></FaStar><FaStar className='inline text-yellow-600 mr-2'></FaStar><FaStar className='inline text-yellow-600 mr-2'></FaStar>{ratings}</p>
                <div className="divider"></div>
                <p> {
                    description.length > 250 ?
                        <p>{description.slice(0, 250) + '......'} <Link className='link link-primary' to={`/course/${course._id}`} >More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions justify-start pt-5">
                    <div className='flex justify-center items-center gap-4'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={author.img} />
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-sky-900'>{author.name}</p>
                            <p > Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;