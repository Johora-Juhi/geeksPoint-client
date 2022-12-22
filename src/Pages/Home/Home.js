import React from 'react';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import LearnersSay from './LearnersSay/LearnersSay';
import LookingFor from './LookingFor/LookingFor';
import StartLearning from './StartLearning/StartLearning';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LookingFor></LookingFor>
            <StartLearning></StartLearning>
            <ChooseUs></ChooseUs>
            <LearnersSay></LearnersSay>
        </div>
        
    );
};

export default Home;