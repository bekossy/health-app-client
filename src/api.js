import axios from "axios";

export const registerUser = async (body) => {
  console.log(body);
  const { data } = await axios.post("http://localhost:5000/api/user", body);
  return data;
};
