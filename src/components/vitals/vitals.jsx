export const Vitals = ({ blodPressure, weight, height, Glucoselevel }) => {
  return (
    <>
      <div className="vitals">
        <h1>your Vitals</h1>
        <div className="vitalContainer">
          <h3>blod Pressure : {blodPressure ? blodPressure : "add vitals"}</h3>
          <h3>Glucos Level : {Glucoselevel ? Glucoselevel : "add vitals"}</h3>
          <h3>weight : {weight ? weight : "add vitals"}</h3>
          <h3>height : {height ? height : "add vitals"}</h3>
        </div>
      </div>
    </>
  );
};
