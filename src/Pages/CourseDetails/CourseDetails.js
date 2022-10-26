import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course=useLoaderData();
    const{image,name,description}=course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
              <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-bg btn-primary"><Link to='/courses'>Go back to all courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;