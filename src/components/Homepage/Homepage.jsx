import { useState, useEffect } from "react";
import axios from "axios";
import { Appointment } from "../appointment/appointment";
import { Dosage } from "../dosage/Dosage";
import { Vitals } from "../vitals/vitals";

import "./Homepage.css";

export const Homepage = ({ token }) => {
  const [appointments, setAppointments] = useState([]);
  const [vitals, setVitals] = useState([]);
  const [dosage, setDosage] = useState([]);

  const test = async () => {
    let appointment = await axios.get(
      "https://healthserver-psa.herokuapp.com/api/appointment/",
      { headers: { authorization: `Bearer ${token}` } }
    );
    appointment === [] && setAppointments(appointment.data);
    // vitals = await axios.get(
    //   "https://healthserver-psa.herokuapp.com/api/vital/",
    //   { headers: { Authorization: `Bearer ${token}` } }
    // );
    // dosages = await axios.get(
    //   "https://healthserver-psa.herokuapp.com/api/dosage/",
    //   { headers: { Authorization: `Bearer ${token}` } }
    // );
    console.log(appointments);
  };

  useEffect(() => {
    test();
  }, []);

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
          <Vitals />

          <div className="medicals">
            <Appointment appointments={appointments}/>
            <Dosage />
          </div>
        </div>
      </section>
    </>
  );
};
