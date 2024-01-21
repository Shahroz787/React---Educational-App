import React from "react";
import {awrapper} from "../../dummyData"

const AWrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((value) => (
            <div className="box flex" key={value.id}>
              <div className="img">
                <img src={value.cover} alt={value.name} />
              </div>

              <div className="text">
                <h1>{value.data}</h1>
                <h3>{value.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
