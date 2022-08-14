import { useState, useEffect } from "react";
import axios from "axios";
import { Appointment } from "../appointment/appointment";
import { Dosage } from "../dosage/Dosage";
import { Vitals } from "../vitals/vitals";
import Modals from "../modals/Modals";
import { modalTypes } from "../modals";

import "./Homepage.css";

export const Homepage = ({
  token,
  setModal,
  setRefresh,
  editData,
  refresh,
  setEditData,
}) => {
  const [appointments, setAppointments] = useState([]);
  const [filterAppointments, setfilterAppointments] = useState([]);
  const [vitals, setVitals] = useState({});
  const [dosage, setDosage] = useState([]);
  const [after, setAfter] = useState(0);

  const fetchData = async () => {
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
    setfilterAppointments(tempAppoinment.data);
  };

  useEffect(() => {
    fetchData();
  }, [after, refresh]);

  return (
    <>
      <section className="homeContainer">
        <form className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search appointment with doctors name"
            onChange={(e) => {
              const { value } = e.target;
              if (appointments.length > 0) {
                setAppointments(
                  appointments.filter((app) =>
                    String(app.doctor).startsWith(value)
                  )
                );
              }
              if (value === "") {
                setAppointments(filterAppointments);
              }
            }}
          />
        </form>

        <div className="homeContent">
          <Vitals
            blodPressure={vitals?.blodPressure}
            weight={vitals?.weight}
            height={vitals?.height}
            Glucoselevel={vitals?.Glucoselevel}
          />
          <>
            <div className="vitalBtn">
              <div
                className="editV"
                onClick={() => {
                  setModal(modalTypes.vitalAdd);
                }}
              >
                Add Vitals
              </div>
              <div
                className="editV"
                onClick={() => {
                  setModal(modalTypes.vitalEdit);
                  setEditData(vitals);
                }}
              >
                Edit Vitals
              </div>
            </div>
          </>

          <div className="medicals">
            <Appointment
              setModal={setModal}
              appointments={appointments}
              setEditData={setEditData}
              editData={editData}
              token={token}
              setRefresh={setRefresh}
              refresh={refresh}
            />
            <Dosage
              dosage={dosage}
              setModal={setModal}
              token={token}
              setEditData={setEditData}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          </div>
        </div>
      </section>
    </>
  );
};
