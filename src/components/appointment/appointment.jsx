import { useState } from "react";

export const Appointment = () => {
  const appoints = [
    {
      id: new Date().getTime().toString(),
      day: "12/04/20",
      time: "1:37",
      purpose: "Dental checkup",
    },
    {
      id: new Date().getTime().toString(),
      day: "16/10/22",
      time: "19:38",
      purpose: "Drugs Refill",
    },
  ];
  const [appoint, setAppoint] = useState([...appoints]);
  return (
    <>
      <div className="appointment">
        <h1>appointment</h1>
        <div className="appointContainer">
          <div className="appointContent">
            <h1>Day</h1>
            <div className="appointDetails">
              {appoint.map((day) => (
                <h4>{day.day}</h4>
              ))}
            </div>
          </div>
          <div className="appointContent">
            <h1>Time</h1>
            <div className="appointDetails">
              {appoint.map((time) => (
                <h4>{time.time}</h4>
              ))}
            </div>
          </div>
          <div className="appointContent">
            <h1>Purpose</h1>
            <div className="appointDetails">
              {appoint.map((purpose) => (
                <h4>{purpose.purpose}</h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
