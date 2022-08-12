import { useState } from "react";

export const Dosage = () => {
  const dosage = [
    { id: new Date().getTime().toString(), dose: "Cabsule: Two Tablets" },
    { id: new Date().getTime().toString(), dose: "Amocline: Twice daily" },
    { id: new Date().getTime().toString(), dose: "Weed: Twice daily" },
  ];
  const [dose, setDose] = useState([...dosage]);
  return (
    <>
      <div className="medDos">
        <h1>Medical Dosage</h1>
        <div className="medDosContainer">
          {dose.map((drug) => {
            const { id, dose } = drug;
            return (
              <>
                <div className="dosContent" key={id}>
                  <h1>{dose}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
