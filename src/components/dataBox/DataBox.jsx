import React from "react";
import "./dataBox.css";

const DataBox = ({ field, data }) => {
  return (
    <div className="databox">
      <div className="leftdata">
        <div className="leftdataFeild">{field}</div>
        <div className="leftDataData">{data}</div>
      </div>
      <div className="rightdata">right</div>
    </div>
  );
};

export default DataBox;
