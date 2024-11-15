import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import BookCollection from '../../components/home/BookCollection';
import Confessions from '../../components/home/Confessions';
import Podcast from '../../components/home/Podcast';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <BookCollection/>
            <Confessions/>
            <Podcast/>
        </div>
    );
};

export default Home;