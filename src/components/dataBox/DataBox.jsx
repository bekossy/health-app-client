import React from "react";
import "./dataBox.css";

const DataBox = ({ leftfield, leftdata, rightfield, rightdata }) => {
  return (
    <div className="databox">
      <div className="leftdata">
        <div className="leftdataFeild">{leftfield}</div>
        <div className="leftDataData">{leftdata}</div>
      </div>
      <div className="rightdata">
        <div className="leftdataFeild">{rightfield}</div>
        <div className="leftDataData">{rightdata}</div>
      </div>
    </div>
  );
};

export default DataBox;
