import axios from "axios";

export const registerUser = async (body) => {
  const { data } = await axios.post("http://localhost:5000/api/user", body);
  return data;
};

export const handleAddAppointment = async (body) => {
  return await axios.post(
    "https://healthserver-psa.herokuapp.com/api/appointment/",
    body
  );
};
