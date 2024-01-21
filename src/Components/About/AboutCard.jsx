import React from "react";
import { homeAbout } from "../../dummyData";
import About from "../../Images/a1.jpg";
import Heading from "../Common/Heading/Heading";
import AWrapper from "./AWrapper";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={About} alt="about-img" />
          </div>

          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />

            <div className="items">
              {homeAbout.map((value) => (
                <div className="item flexSB" key={value.id}>
                  <div className="img">
                    <img src={value.cover} alt={value.name} />
                  </div>~
                  <div className="text">
                    <h2>{value.title}</h2>
                    <p>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
