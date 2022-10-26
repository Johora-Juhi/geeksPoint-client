import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <SideNav></SideNav>
            {
                courses.map(course => 
                    <Course
                        key={course._id}
                        course={course}>
                    </Course>)
            }

        </div>
    );
};

export default Courses;