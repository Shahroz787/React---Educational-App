import React from "react";
import Back from "../Common/Back/Back";
import TeamCard from "./TeamCard";
import "./Team.css"




const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid5">
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
