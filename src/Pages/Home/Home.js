import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/banner.jpeg';


const Home = () => {
    return (
        <div className=' bg-red-50 flex flex-col-reverse lg:flex-row  justify-center items-center py-10 gap-10'>
            <div className="">
                
                <h1 className='text-3xl lg:text-5xl font-extrabold  py-5'>geeks<span className='text-red-400'>Point</span></h1>
                <p className='text-gray-400 text-xl tracking-wide'>Build yourself for bettter future</p>
                <Link className="btn btn-error btn-active mt-7 text-slate-50" to="/courses">Visit Our Courses</Link>
            </div>
            <div>
            <img style={{ width: '300px' }} src={Banner} alt="" />
            </div>
        </div>
    );
};

export default Home;