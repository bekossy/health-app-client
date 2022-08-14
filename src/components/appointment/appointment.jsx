import { modalTypes } from "../modals";
import axios from "axios";

export const Appointment = ({
  appointments,
  setModal,
  setEditData,
  token,
  setRefresh,
  refresh,
}) => {
  const handleDelete = async (path, id) => {
    const res = await axios.delete(
      `https://healthserver-psa.herokuapp.com/api/${path}/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res.status == 200) {
      alert("deleted appointment");
      setRefresh(!refresh);
    } else {
      alert("try again");
    }
  };
  return (
    <>
      <div className="appointment">
        <h1>appointment</h1>
        <div className="appointContainer">
          <>
            <div className="appointContent">
              <h1>Time</h1>
              <div className="appointDetails">
                {appointments.map(({ time, date }) => (
                  <h4 key={date}>{`${time} ${date}`}</h4>
                ))}
              </div>
            </div>
            <div className="appointContent">
              <h1>Doctor</h1>
              <div className="appointDetails">
                {appointments.map(({ doctor }) => (
                  <h4
                    key={doctor}
                    onClick={() => {
                      setEditData(doctor);
                    }}
                  >
                    {doctor}
                  </h4>
                ))}
              </div>
            </div>
            <div className="appointContent">
              <h1>Location</h1>
              <div className="appointDetails">
                {appointments.map((app, id) => (
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    key={id}
                  >
                    <h4>{app.hospital}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                      onClick={() => {
                        setEditData(app);
                        setModal(modalTypes.appointmentEdit);
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
                        handleDelete("appointment", app._id);
                      }}
                    >
                      <path
                        fill="#000000"
                        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>
        <div
          className="editVitals"
          onClick={() => {
            setModal(modalTypes.appointmentAdd);
          }}
        >
          Add Appoinment
        </div>
      </div>
    </>
  );
};
