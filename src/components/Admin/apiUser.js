import axios from "axios";

export const getUser = async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res.data;
};