import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-ten-server-xi.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='rounded border border-sky-900 p-5'>
            <h4 className='d-none d-lg-block text-xl font-medium text-sky-900'>Total Categories: {courses.length} </h4>
            <ul className="menu w-16 lg:w-28">
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