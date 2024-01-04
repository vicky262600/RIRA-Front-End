// import axios from "axios";

// export const loginCall = async (userCredential, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   try {
//     const res = await axios.post("/auth/login", userCredential);
//     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//   } catch (err) {
//     dispatch({ type: "LOGIN_FAILURE", payload: err });
//   }
// };

import axios from "axios";

// Assuming that your backend API is hosted at https://rira-api.vercel.app
const baseURL = "https://rira-api.vercel.app";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${baseURL}/api/auth/login`, userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
