import React from "react";
import { useOutletContext } from "react-router-dom";

import AnimationPages from "../components/AnimationPages";

import "../style/Volunteering.css";

const Volunteering = () => {
  const setTitle = useOutletContext();
  React.useEffect(() => {
    setTitle("Wolontariat");
  }, []);
  return (
    <AnimationPages>
      <div className="volunteering">
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
        <div className="volunteering-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            laborum blanditiis reiciendis officia assumenda! Inventore quibusdam
            consectetur adipisci, consequuntur praesentium illum aut modi
            beatae, eos vitae corporis iure molestias quos.
          </p>
        </div>
      </div>
    </AnimationPages>
  );
};

export default Volunteering;
