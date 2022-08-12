import "./Homepage.css";

export const Homepage = () => {
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
          <div className="vitals">
            <h1>your Vitals</h1>
            <div className="vitalContainer">
              <h3>Heart rate: 21bpm</h3>
              <h3>Blood pressure: 120/80mmhg</h3>
              <h3>Glucose level: 130 mg/dLm</h3>
              <h3>Weight: 75kg</h3>
            </div>
          </div>

          <div className="medicals">
            <div className="appointment">
              <h1>appointment</h1>
              <div className="appointContainer">
                <div className="appointContent">
                  <h1>Day</h1>
                  <div className="appointDetails">
                    <h4>12/12/12</h4>
                    <h4>12/12/12</h4>
                  </div>
                </div>
                <div className="appointContent">
                  <h1>Time</h1>
                  <div className="appointDetails">
                    <h4>1:14</h4>
                    <h4>1:14</h4>
                  </div>
                </div>
                <div className="appointContent">
                  <h1>Purpose</h1>
                  <div className="appointDetails">
                    <h4>Dental checkup</h4>
                    <h4>Dental checkup</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="medDos">
              <h1>Medical Dosage</h1>
              <div className="medDosContainer">
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
                <div className="dosContent">
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
