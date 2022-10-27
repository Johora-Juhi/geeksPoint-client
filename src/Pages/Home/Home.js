import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo2.png';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className="h-back">
                <img style={{ width: '60px' }} src={Logo} alt="" />
                <h1 className='text-3xl lg:text-5xl font-extrabold text-slate-50 py-5'>geeks<span className='text-red-400'>Point</span></h1>
                <p className='text-gray-200 text-xl tracking-wide'>- - - Build yourself for bettter future - - -</p>
                <Link className="btn btn-error btn-active mt-7 text-slate-50" to="/courses">Visit Our Courses</Link>
            </div>
        </div>
    );
};

export default Home;