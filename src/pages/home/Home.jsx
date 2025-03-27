import React from "react";
import BookCollection from "../../components/home/BookCollection";
import Confessions from "../../components/home/Confessions";
import HeroSection from "../../components/home/HeroSection";
import Stories from "../../components/home/Stories";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookCollection />
      <Confessions />
      <Stories />
    </div>
  );
};

export default Home;
