import React from 'react';
import learner1 from '../../../assets/learner1.jpg';
import learner2 from '../../../assets/learner2.jpg';
import learner3 from '../../../assets/learner3.jpg';
import { FaQuoteRight } from 'react-icons/fa';


const LearnersSay = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='font-bold text-4xl text-sky-900 py-3'>Learners say about geeksPoint</h1>
            <p className='text-stone-400'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
            <div className='py-10 w-full lg:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I really appreciate the awesome job this team does! In friendly tone and highly professional skills they accomplish to solve any problem I face. I feel I have a great team by my side. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner1} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Allien Zampa</p>
                            <p className='text-start' > React</p>
                        </div>
                    </div>
                </div>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I really appreciate the awesome job this team does! In friendly tone and highly professional skills they accomplish to solve any problem I face. I feel I have a great team by my side. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner2} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Smit Kong</p>
                            <p className='text-start' >JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I really appreciate the awesome job this team does! In friendly tone and highly professional skills they accomplish to solve any problem I face. I feel I have a great team by my side. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner3} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Jeku Smith</p>
                            <p className='text-start' >Python</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LearnersSay;