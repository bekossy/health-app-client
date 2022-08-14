export const Vitals = ({ blodPressure, weight, height, Glucoselevel }) => {
  return (
    <>
      <div className="vitals">
        <h1>your Vitals</h1>
        <div className="vitalContainer">
          <h3>blod Pressure : {blodPressure ? blodPressure : "please add"}</h3>
          <h3>Glucos Level : {Glucoselevel ? Glucoselevel : "please add"}</h3>
          <h3>weight : {weight ? weight : "please add"}</h3>
          <h3>height : {height ? height : "please add"}</h3>
        </div>
      </div>
    </>
  );
};
