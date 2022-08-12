import React from "react";
import "./conditions.css";

const Conditions = () => {
  return (
    <div className="conditions">
      <div className="conditionsContainer">
        <div className="condtionNameContainer">
          <div className="condtionName">Condition : Asthma</div>
        </div>
        <div className="yearStartContainer">
          <div className="yearStart">start : may 12 2020</div>
        </div>
        <div className="yearEndContainer">
          <div className="yearEnd">end : still ongoing</div>
        </div>
        <div className="statusContainer">
          <div className="conditionStatus">Status : severe</div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
