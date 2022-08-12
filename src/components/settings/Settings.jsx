import React from "react";
import "./Settings.css";
import DataBox from "../dataBox/dataBox";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingscontainer">
        <div className="userProfile">
          <h2 className="userProfileName">user name</h2>
          <div className="userDetailsContainer">
            <DataBox field={"username"} data={"inventedmost"} />
            <DataBox field={"username"} data={"inventedmost"} />
            <DataBox field={"username"} data={"inventedmost"} />
          </div>
          <div className="editProfile">
            <button className="editProfileButton">Edit Profile</button>
          </div>
        </div>
        <div className="history">history</div>
      </div>
    </div>
  );
};

export default Settings;
