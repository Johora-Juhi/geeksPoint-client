import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className='rounded border border-red-400 p-5 bg-red-50'>
            <h4 className='d-none d-lg-block text-xl font-medium'>Total Categories: {courses.length} </h4>
            <ul className="menu w-16 lg:w-28 bg-red-50">
                {
                    courses.map(course => <p key={course._id}>
                        <li><Link className='pt-2' to={`/course/${course._id}`}>{course.title}</Link></li>
                    </p>
                    )
                }
            </ul>
        </div>
    );
};

export default SideNav;