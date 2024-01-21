import React from "react";
import Heading from "../../Common/Heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
                  <div className="row">
                      <Heading subtitle="WELCOME TO SHAHROZ EDUCARE" title="Best Digital Education"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              odit ratione assumenda dignissimos nulla consectetur suscipit vel
              ea! Delectus doloremque eveniet et veniam.
            </p>
            <div className="button hero-btn">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>

              <button >
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin-hero"></div>
    </>
  );
};

export default Hero;
