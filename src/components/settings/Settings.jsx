import { useState, useEffect } from "react";
import "./Settings.css";
import DataBox from "../dataBox/dataBox";
import Conditions from "../conditions/Conditions";
import axios from "axios";
import { modalTypes } from "../modals";

const Settings = ({ user, token, setModal, editData, setEditData }) => {
  const [condition, setCondition] = useState([]);
  const [after, setAfter] = useState(0);

  const fetchData = async () => {
    if (after < 2) setAfter(after + 1);
    let tempCondition = await axios.get(
      "https://healthserver-psa.herokuapp.com/api/conditions/",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCondition(tempCondition.data);
    if (after < 2) setAfter(after + 1);
  };

  useEffect(() => {
    fetchData();
  }, [after]);

  const handleDelete = async (path, id) => {
    const res = await axios.delete(
      `https://healthserver-psa.herokuapp.com/api/${path}/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res.status == 200) {
      alert("deleted ");
    }
  };

  return (
    <div className="settings">
      <div className="settingscontainer">
        <div className="userProfile">
          <h2 className="userProfileName">User Profile</h2>
          <div className="userDetailsContainer">
            <DataBox
              leftfield={"username"}
              leftdata={user.userName}
              rightfield="name"
              rightdata={user.firstName + " " + user.lastName}
            />
            <DataBox
              leftfield={"email"}
              leftdata={user.email}
              rightfield="age"
              rightdata={user.age}
            />
            <DataBox
              leftfield={"gender"}
              leftdata={user.gender}
              rightfield="address"
              rightdata={user.address}
            />
          </div>
          <div className="editProfile">
            <button
              className="editProfileButton"
              onClick={() => {
                setModal(modalTypes.userEdit);
                setEditData(user);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="history">
          <h2 className="userProfileName">Medical History</h2>
          <div className="historyDetailsContainer">
            {condition.map((user, id) => (
              <Conditions
                key={id}
                yearStart={user.yearStart}
                yearEnd={user.yearEnd}
                state={user.state}
                name={user.name}
                id={user._id}
                handleDelete={handleDelete}
                setModal={setModal}
                user={user}
                editData={editData}
                setEditData={setEditData}
              />
            ))}
          </div>
          <div className="editProfile">
            <button
              className="editProfileButton"
              onClick={() => {
                setModal(modalTypes.conditionAdd);
              }}
            >
              New Condition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
