import axios from "axios";

export const registerUser = async (body) => {
  const { data } = await axios.post("http://localhost:5000/api/user", body);
  return data;
};

export const handleLogin = async (body) => {
  const response = await axios.post(
    "https://healthserver-psa.herokuapp.com/api/user/login",
    body
  );
  return response;
};
