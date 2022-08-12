import React from "react";
import "./Settings.css";
import DataBox from "../dataBox/dataBox";
import Conditions from "../conditions/Conditions";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingscontainer">
        <div className="userProfile">
          <h2 className="userProfileName">User Profile</h2>
          <div className="userDetailsContainer">
            <DataBox
              leftfield={"username"}
              leftdata={"inventedmost"}
              rightfield="name"
              rightdata="firstname lastname"
            />
            <DataBox
              leftfield={"email"}
              leftdata={"inventedmost"}
              rightfield="age"
              rightdata="firstname lastname"
            />
            <DataBox
              leftfield={"gender"}
              leftdata={"inventedmost"}
              rightfield="address"
              rightdata="firstname lastname"
            />
          </div>
          <div className="editProfile">
            <button className="editProfileButton">Edit Profile</button>
          </div>
        </div>
        <div className="history">
          <h2 className="userProfileName">Medical History</h2>
          <div className="historyDetailsContainer">
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
            <Conditions />
          </div>
          <div className="editProfile">
            <button className="editProfileButton">New Condition</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
