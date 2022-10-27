import React from 'react';
import { FaQuestion } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div>
            <div className="text-center text-red-400 text-5xl font-bold">
                <h2>FAQ</h2>
            </div>
            <div className='mx-2'>
                <div className='container mx-auto pt-10 py-3 sm:w-full lg:w-2/4'>
                    <div tabIndex={0} className="collapse border border-red-400 bg-red-50 rounded-t-2xl  shadow-md">
                        <div className="collapse-title text-xl font-medium">
                            <FaQuestion className='text-red-500 mb-1'></FaQuestion>What do you used to build this website?
                        </div>
                        <div className="collapse-content">
                            <p>1. React</p>
                            <p>2. React-Router-Dom</p>
                            <p>3. Tailwind CSS</p>
                            <p>4. DaisyUI</p>
                            <p>5. Firebase</p>
                            <p>6. React Icons</p>
                            <p>7. React-to-PDF</p>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto py-3 sm:w-full lg:w-2/4'>
                    <div tabIndex={0} className="collapse border border-red-400 bg-red-50 shadow-md">
                        <div className="collapse-title text-xl font-medium">
                            <FaQuestion className='text-red-500 mb-1'></FaQuestion>Which course do you provide?
                        </div>
                        <div className="collapse-content">
                            <p>1. React</p>
                            <p>2. GraphQl</p>
                            <p>3. Angular</p>
                            <p>4. Python</p>
                            <p>5. Javascript</p>
                            <p>6. CSS3</p>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto py-3 sm:w-full lg:w-2/4'>
                    <div tabIndex={0} className="collapse border border-red-400 bg-red-50 rounded-b-2xl  shadow-md">
                        <div className="collapse-title text-xl font-medium">
                            <FaQuestion className='text-red-500 mb-1'></FaQuestion>Which route do you used in this site?
                        </div>
                        <div className="collapse-content">
                            <p>1. Home</p>
                            <p>2. Courses</p>
                            <p>3. Blog</p>
                            <p>4. Faq</p>
                            <p>5. Login</p>
                            <p>6. Register</p>
                            <p>7. 404</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;