import { useState } from "react";
import "./Modals.css";
import { modalTypes } from "./index";
import axios from "axios";

const Modals = ({
  setModal,
  modal,
  editData,
  token,
  setEditData,
  setRefresh,
  refresh,
  setUser,
}) => {
  const [modalData, setModalData] = useState({});
  const [modalEditData, setModalEditData] = useState(editData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  const handleOnEdit = (e) => {
    const { name, value } = e.target;
    setModalEditData({ ...modalEditData, [name]: value });
  };

  const handleAdd = async (body, path) => {
    return await axios.post(
      `https://healthserver-psa.herokuapp.com/api/${path}/`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const handleEdit = async (body, path) => {
    return await axios.put(
      `https://healthserver-psa.herokuapp.com/api/${path}/${editData._id}`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return (
    <div className="modalsContainer">
      <div className="modal">
        {" "}
        {modal === modalTypes.vitalAdd && (
          <>
            <h1 className="modalTitle">Add Vitals</h1>
            <div className="auth">
              <label htmlFor="blodPressure">blodPressure</label>
              <input
                type="text"
                name="blodPressure"
                id="firstName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="Glucoselevel">Glucoselevel</label>
              <input
                type="text"
                name="Glucoselevel"
                id="lastName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="weight">weight</label>
              <input
                type="text"
                name="weight"
                id="username"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="height">height</label>
              <input
                type="email"
                name="height"
                id="email"
                required
                onChange={handleOnChange}
              />
              <button
                onClick={async () => {
                  // e.preventDefault()
                  const res = await handleAdd(modalData, "vital");
                  if (res.status == 200) {
                    alert("crteted new vitals");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setEditData({});
                  setModalData({});
                }}
                className="btn"
              >
                Add vital
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.vitalEdit && (
          <>
            <h1 className="modalTitle">Edit Vitals</h1>
            <div className="auth">
              <label htmlFor="blodPressure">blodPressure</label>
              <input
                type="text"
                name="blodPressure"
                id="firstName"
                required
                onChange={handleOnEdit}
                value={modalEditData.blodPressure}
              />
              <label htmlFor="Glucoselevel">Glucose Level</label>
              <input
                type="text"
                name="Glucoselevel"
                id="lastName"
                required
                value={modalEditData.Glucoselevel}
                onChange={handleOnEdit}
              />
              <label htmlFor="weight">Weight </label>
              <input
                type="text"
                name="weight"
                id="username"
                required
                onChange={handleOnEdit}
                value={modalEditData.weight}
              />
              <label htmlFor="height">Height</label>
              <input
                type="email"
                name="height"
                id="email"
                required
                value={modalEditData.height}
                onChange={handleOnEdit}
              />
              <button
                className="btn"
                onClick={async () => {
                  const res = await handleEdit(modalEditData, "vital");
                  if (res.status == 200) {
                    alert("updated vitals");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setModalData({});
                }}
              >
                Edit vitals
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.dosageAdd && (
          <>
            <h1 className="modalTitle">Add Dosage</h1>
            <div className="auth">
              <label htmlFor="name">Drug Name</label>
              <input
                type="text"
                name="name"
                id="firstName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="dosage">Dosage</label>
              <input
                type="text"
                name="dosage"
                id="lastName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="weight">timesPerDay</label>
              <input
                type="text"
                name="timesPerDay"
                id="username"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="height">timesPerWeek:</label>
              <input
                type="email"
                name="timesPerWeek"
                id="email"
                required
                onChange={handleOnChange}
              />
              <button
                className="btn"
                onClick={async () => {
                  // e.preventDefault();
                  const { timesPerDay, timesPerWeek, dosage, name } = modalData;
                  if (!timesPerDay || !timesPerWeek || !dosage || !name) {
                    alert("fill all fileds");
                    return;
                  }
                  const res = await handleAdd(modalData, "dosage");
                  if (res.status == 200) {
                    alert("created new dosage");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setEditData({});
                  setModalData({});
                }}
              >
                Add Dosage
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.dosageEdit && (
          <>
            <h1 className="modalTitle">Edit Dosage</h1>
            <div className="auth">
              <label htmlFor="name">Drug Name</label>
              <input
                type="text"
                name="name"
                id="firstName"
                required
                value={modalEditData.name}
                onChange={handleOnEdit}
              />
              <label htmlFor="dosage">Dosage</label>
              <input
                type="text"
                name="dosage"
                id="lastName"
                required
                value={modalEditData.dosage}
                onChange={handleOnEdit}
              />
              <label htmlFor="weight">timesPerDay</label>
              <input
                type="text"
                name="timesPerDay"
                id="username"
                required
                value={modalEditData.timesPerDay}
                onChange={handleOnEdit}
              />
              <label htmlFor="height">timesPerWeek:</label>
              <input
                type="email"
                name="timesPerWeek"
                id="email"
                required
                value={modalEditData.timesPerWeek}
                onChange={handleOnEdit}
              />
              <button
                className="btn"
                onClick={async () => {
                  const res = await handleEdit(modalEditData, "dosage");
                  if (res.status == 200) {
                    alert("updated dosage");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setModalData({});
                }}
              >
                Edit Dosage
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.appointmentAdd && (
          <>
            <h1 className="modalTitle">Add Appointment</h1>
            <div className="auth">
              <label htmlFor="doctor">doctor</label>
              <input
                type="text"
                name="doctor"
                id="firstName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="hospital">hospital</label>
              <input
                type="text"
                name="hospital"
                id="lastName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="time">time</label>
              <input
                type="text"
                name="time"
                id="username"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="date">date</label>
              <input
                type="text"
                name="date"
                id="email"
                required
                onChange={handleOnChange}
              />
              <button
                onClick={async () => {
                  // e.preventDefault();
                  const { date, doctor, hospital, time } = modalData;
                  if (!date || !doctor || !hospital || !time) {
                    alert("fill all fileds");
                    return;
                  }
                  const res = await handleAdd(modalData, "appointment");
                  if (res.status == 200) {
                    alert("created apppointment");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setEditData({});
                  setModalData({});
                }}
                className="btn"
              >
                New Appointment
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.appointmentEdit && (
          <>
            <h1 className="modalTitle">Edit Appointment</h1>
            <div className="auth">
              <label htmlFor="doctor">doctor</label>
              <input
                type="text"
                name="doctor"
                id="firstName"
                required
                value={modalEditData.doctor}
                onChange={handleOnEdit}
              />
              <label htmlFor="hospital">hospital</label>
              <input
                type="text"
                name="hospital"
                id="lastName"
                required
                value={modalEditData.hospital}
                onChange={handleOnEdit}
              />
              <label htmlFor="time">time</label>
              <input
                type="text"
                name="time"
                id="username"
                required
                value={modalEditData.time}
                onChange={handleOnEdit}
              />
              <label htmlFor="date">date</label>
              <input
                type="text"
                name="date"
                id="email"
                required
                value={modalEditData.date}
                onChange={handleOnEdit}
              />
              <button
                onClick={async () => {
                  const res = await handleEdit(modalEditData, "appointment");
                  if (res.status == 200) {
                    alert("updated appointment");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setModalData({});
                }}
                className="btn"
              >
                Edit Appointment
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.conditionEdit && (
          <>
            <h1 className="modalTitle">Edit Condition</h1>
            <div className="auth">
              <label htmlFor="blodPressure">Name</label>
              <input
                type="text"
                name="name"
                id="firstName"
                required
                value={modalEditData.name}
                onChange={handleOnEdit}
              />
              <label htmlFor="Glucoselevel">Current State</label>
              <input
                type="text"
                name="state"
                id="lastName"
                required
                value={modalEditData.state}
                onChange={handleOnEdit}
              />
              <label htmlFor="weight">Start Year</label>
              <input
                type="text"
                name="yearStart"
                id="username"
                required
                value={modalEditData.yearStart}
                onChange={handleOnEdit}
              />
              <label htmlFor="height">End Year</label>
              <input
                type="email"
                name="yearEnd"
                id="email"
                required
                value={modalEditData.yearEnd}
                onChange={handleOnEdit}
              />
              <button
                className="btn"
                onClick={async () => {
                  const res = await handleEdit(modalEditData, "conditions");
                  if (res.status == 200) {
                    alert("updated condition");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setModalData({});
                }}
              >
                Edit Condition
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.conditionAdd && (
          <>
            <h1 className="modalTitle">Add Condition</h1>
            <div className="auth">
              <label htmlFor="blodPressure">Name</label>
              <input
                type="text"
                name="name"
                id="firstName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="Glucoselevel">Current State</label>
              <input
                type="text"
                name="state"
                id="lastName"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="weight">Start Year</label>
              <input
                type="text"
                name="yearStart"
                id="username"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="height">End Year</label>
              <input
                type="email"
                name="yearEnd"
                id="email"
                required
                onChange={handleOnChange}
              />
              <button
                className="btn"
                onClick={async () => {
                  // e.preventDefault();
                  const { yearStart, yearEnd, state, name } = modalData;
                  if (!yearStart || !yearEnd || !state || !name) {
                    alert("fill all fileds");
                    return;
                  }
                  const res = await handleAdd(modalData, "conditions");
                  if (res.status == 200) {
                    alert("created condition");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  setModal(false);
                  setModalData({});
                  setEditData({});
                  setModalData({});
                }}
              >
                Add Condition
              </button>
            </div>
          </>
        )}
        {modal === modalTypes.userEdit && (
          <>
            <h1 className="modalTitle">Edit User</h1>
            <div className="auth">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={modalEditData.firstName}
                onChange={handleOnEdit}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={modalEditData.lastName}
                onChange={handleOnEdit}
              />

              <label htmlFor="age">Age </label>
              <input
                type="number"
                name="age"
                id="age"
                required
                value={modalEditData.age}
                onChange={handleOnEdit}
              />

              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                id="address"
                value={modalEditData.address}
                onChange={handleOnEdit}
              />
              <button
                className="btn"
                onClick={async () => {
                  const res = await axios.put(
                    `https://healthserver-psa.herokuapp.com/api/user`,
                    modalEditData,
                    { headers: { Authorization: `Bearer ${token}` } }
                  );
                  if (res.status == 200) {
                    alert("updated user");
                    setRefresh(!refresh);
                  } else {
                    alert("try again");
                  }
                  console.log(res.data);
                  localStorage.setItem("user", JSON.stringify(res.data));
                  setUser(JSON.parse(localStorage.getItem("user")));
                  setModal(false);
                  setModalData({});
                  setModalEditData({});
                }}
              >
                Edit user
              </button>
            </div>
          </>
        )}
        <div
          className="editVitas"
          onClick={() => {
            setModal(false);
          }}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default Modals;
