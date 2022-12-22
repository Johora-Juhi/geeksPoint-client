import React from 'react';
import choose from '../../../assets/choose.png';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ChooseUs = () => {
    return (
        <div className="card lg:card-side bg-base-100 my-20 w-full lg:w-5/6 mx-auto">
            <figure className='w-full lg:w-3/6'><img src={choose} alt="Album" /></figure>
            <div className="w-full lg:w-1/2 mt-20  px-4 lg:p-0">
                <p className='font-bold text-stone-400'>WHY CHOOSE US?</p>
                <h2 className="font-bold text-4xl text-sky-900 py-3">Learn the Latest Top Skills</h2>
                <p className='text-stone-400'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                <div className='py-10'>
                    <p className='flex items-center text-stone-400'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Go at Your Own Pace in this World</span></p>
                    <p className='flex items-center text-stone-400 py-3'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Learn from Industry Experts - eDash</span></p>
                    <p className='flex items-center text-stone-400'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Leadership, Training and Tools! Everything</span></p>
                </div>
                <div className="card-actions justify-start">
                <Link className="btn btn-accent rounded-none mt-7 text-slate-50" to="/courses">Start Learning Today</Link>                </div>
            </div>
        </div>
    );
};

export default ChooseUs;