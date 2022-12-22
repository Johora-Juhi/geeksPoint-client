import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import LookingFor from './LookingFor/LookingFor';
import StartLearning from './StartLearning/StartLearning';

const Home = () => {
    // const [text] = useTypewriter({
    //     words: ['Build yourself for bettter future'],
    //     loop: 0
    // })
    return (
        // <div className=' bg-red-50 flex flex-col-reverse lg:flex-row  justify-center items-center py-10 gap-10 lg:gap-20'>
        //     <div className='lg:w-1/2 mx-auto text-start lg:text-end '>

        //         <h1 className=' text-3xl lg:text-5xl font-extrabold  py-5'>geeks<span className='text-red-400'>Point</span></h1>
        //         <p className='text-gray-400 text-xl tracking-wide'>{text}|</p>
        //         <Link className="btn btn-error btn-active mt-7 text-slate-50" to="/courses">Visit Our Courses</Link>
        //     </div>
        //     <div className='lg:w-1/2 mx-auto ' >
        //     <img style={{ width: '300px' }} src={Banner} alt="" />
        //     </div>
        // </div>
        <div>
            <Banner></Banner>
            <LookingFor></LookingFor>
            <StartLearning></StartLearning>
            <ChooseUs></ChooseUs>
        </div>
        
    );
};

export default Home;