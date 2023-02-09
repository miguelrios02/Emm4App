import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const devicesSlice = createSlice({
  name: "devices",
  initialState: [],
  reducers: {
    setDevicesGlobal: (state, action) => action.payload,
  },
});

export const { setDevicesGlobal } = devicesSlice.actions;
export default devicesSlice.reducer;

export const getAllDivices = () => (dispatch) => {
  const URL = "https://e-commerce-api.academlo.tech/api/v1/products";
  axios
    .get(URL)
    .then((res) => dispatch(setDevicesGlobal(res.data.data.products)))
    .catch((err) => console.log(err));
};
