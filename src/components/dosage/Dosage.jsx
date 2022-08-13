import { useState } from "react";

export const Dosage = () => {
  const dosage = [
    { id: 1, dose: "Cabsule: Two Tablets" },
    { id: 2, dose: "Amocline: Twice daily" },
    { id: 3, dose: "Weed: Twice daily" },
  ];
  const [dose, setDose] = useState([...dosage]);
  return (
    <>
      <div className="medDos">
        <h1>Medical Dosage</h1>
        <div className="medDosContainer">
          {dose.map((drug) => (
            <div className="dosContent" key={drug.id}>
              <h1>{drug.dose}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
