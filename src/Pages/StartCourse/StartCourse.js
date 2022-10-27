import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StartCourse = () => {
    const course=useLoaderData();
    return (
        <div>
            This is {course.title}
        </div>
    );
};

export default StartCourse;