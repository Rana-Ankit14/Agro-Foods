import axios from "axios";

export const postApiCall = async (path, body, user = null) => {
  // console.log('apicall')
  // const user = useSelector((state) => state.user);

  try {
    console.log({ user });
    const access_token = user != null ? user.accessToken : "";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const res = await axios.post(path, body, { headers: headers });
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getApiCall = async (path, params, user = null) => {
  // console.log('apicall')
  try {
    const access_token = user != null ? user.accessToken : "";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const res = await axios.get(path, { headers: headers, params });
    // console.log(res.data)
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
