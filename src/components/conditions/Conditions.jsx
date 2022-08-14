import React from "react";
import "./conditions.css";
import { modalTypes } from "../modals";

const Conditions = ({
  name,
  yearStart,
  yearEnd,
  state,
  handleDelete,
  id,
  user,
  setModal,
  editData,
  setEditData,
}) => {
  return (
    <div className="conditions">
      <div className="conditionsContainer">
        <div className="condtionNameContainer">
          <div className="condtionName">Condition : {name}</div>
        </div>
        <div className="yearStartContainer">
          <div className="yearStart">start : {yearStart}</div>
        </div>
        <div className="yearEndContainer">
          <div className="yearEnd">end : {yearEnd}</div>
        </div>
        <div className="statusContainer">
          <div className="conditionStatus">Status : {state}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "24px", height: "24px" }}
          viewBox="0 0 24 24"
          onClick={() => {
            setEditData(user);
            setModal(modalTypes.conditionEdit);
          }}
        >
          <path
            fill="#000000"
            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "24px", height: "24px" }}
          viewBox="0 0 24 24"
          onClick={() => {
            handleDelete("conditions", id);
          }}
        >
          <path
            fill="#000000"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Conditions;
