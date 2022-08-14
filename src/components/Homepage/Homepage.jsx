import { useState, useEffect } from "react";
import axios from "axios";
import { Appointment } from "../appointment/appointment";
import { Dosage } from "../dosage/Dosage";
import { Vitals } from "../vitals/vitals";
import Modals from "../modals/Modals";
import { modalTypes } from "../modals";

import "./Homepage.css";

export const Homepage = ({ token, setModal, modal, editData, setEditData }) => {
  const [appointments, setAppointments] = useState([]);
  const [vitals, setVitals] = useState({});
  const [dosage, setDosage] = useState([]);
  const [after, setAfter] = useState(0);

  let test = async () => {
    if (after < 2) setAfter(after + 1);
    let tempVital = await axios.get(
      "https://healthserver-psa.herokuapp.com/api/vital",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setVitals(tempVital.data);
    if (after < 2) setAfter(after + 1);
    let temDosages = await axios.get(
      "https://healthserver-psa.herokuapp.com/api/dosage/",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setDosage(temDosages.data);

    let tempAppoinment = await axios.get(
      "https://healthserver-psa.herokuapp.com/api/appointment/",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setAppointments(tempAppoinment.data);
  };

  useEffect(() => {
    test();
  }, [after]);

  return (
    <>
      <section className="homeContainer">
        <form className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search for appointment"
          />
          <svg style={{ width: "30px", height: "30px" }} viewBox="0 0 24 24">
            <path
              fill="#2a68db"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </form>

        <div className="homeContent">
          <Vitals
            blodPressure={vitals?.blodPressure}
            weight={vitals?.weight}
            height={vitals?.height}
            Glucoselevel={vitals?.Glucoselevel}
          />
          <>
            <div
              className="editVitals"
              onClick={() => {
                setModal(modalTypes.vitalAdd);
              }}
            >
              Add Vitals
            </div>
            <div
              className="editVitals"
              onClick={() => {
                setModal(modalTypes.vitalEdit);
                setEditData(vitals);
              }}
            >
              Edit Vitals
            </div>
          </>

          <div className="medicals">
            <Appointment
              setModal={setModal}
              appointments={appointments}
              setEditData={setEditData}
              editData={editData}
              token={token}
            />
            <Dosage
              dosage={dosage}
              setModal={setModal}
              token={token}
              setEditData={setEditData}
            />
          </div>
        </div>
      </section>
    </>
  );
};
