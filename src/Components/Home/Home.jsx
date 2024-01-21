import React from "react";
import AboutCard from "../About/AboutCard";
import Habout from "./Habout";
import Hblog from "./Hblog";
import Hero from "./Hero/Hero";
import Hprice from "./Hprice";
import Testimonial from "./Testimonial/Testimonial";
import "./Home.css"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Habout />
      <Testimonial />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;
