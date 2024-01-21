import React from "react";
import { online } from "../../dummyData";
import Heading from "../Common/Heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt={val.name} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <div className="text">
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
