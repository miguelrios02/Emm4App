import { configureStore } from "@reduxjs/toolkit";
import devices from "./slices/devices.slice";
import userInfo from "./slices/userInfo.slice";
export default configureStore({
  reducer: {
    devices,
    userInfo,
  },
});
