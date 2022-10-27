import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-7 gap-4">
                <div class="lg:col-start-2 lg:col-span-4 ...">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                            courses.map(course =>
                                <Course
                                    key={course._id}
                                    course={course}>
                                </Course>)
                        }
                    </div>
                </div>
                <div class="lg:col-start-6 lg:col-end-8..."><SideNav></SideNav></div>
            </div>
        </div>
    );
};

export default Courses;