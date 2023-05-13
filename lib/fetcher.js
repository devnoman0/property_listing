import axios from "axios";

const fetcher = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

export default fetcher;
