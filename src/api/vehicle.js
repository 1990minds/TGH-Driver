import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { keyUri, config } from "../key";
import { toast } from "react-toastify";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const vehicle = localStorage.getItem("vehicleinfo")
  ? localStorage.getItem("vehicleinfo")
  : null;

const initialState = {
  all_vehicle: [],
  loading: false,
  hasError: false,
  current_dealer: null,
  vehicle: vehicle,
  current_vehicle: [],
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getvehicle: (state) => {
      state.loading = true;
    },

    getAll_vehicle_success: (state, { payload }) => {
      state.loading = false;
      state.all_vehicle = payload;
    },

    getCurrentSuccess: (state, { payload }) => {
      state.loading = false;
      state.current_vehicle = payload;
    },

    get_vehicle_Failure: (state) => {
      state.loading = false;
      state.hasError = true;
    },

    getAuthenticate: (state, { payload }) => {
      state.loading = false;
      state.vehicleAuthenticate = true;
      state.vehicle = payload.vehicle;
      state.token = payload.accessToken;
    },

    isAuthenticateError: (state) => {
      state.hasError = true;
      state.loading = false;
      state.vehicleAuthenticate = false;
    },

    getvehicleProfile: (state, { payload }) => {
      state.loading = false;
      state.vehicle = payload;
      state.vehicleAuthenticate = true;
    },
  },
});

export const {
  getvehicle,
  getAll_vehicle_success,
  getCurrentSuccess,
  get_vehicle_Failure,
  getvehicleProfile,
  getAuthenticate,
  isAuthenticateError,
} = vehicleSlice.actions;

export const vehicleSelector = (state) => state.vehicle;

export const fetchAllvehicle = () => async (dispatch) => {
  dispatch(getvehicle());
  const key = "fetchAllvehicle";
  try {
    const { data } = await axios.get(
      keyUri.BACKEND_URI + `/api/get-all-vehicles`,
      config
    );
    dispatch(getAll_vehicle_success(data));
  } catch (error) {
    dispatch(get_vehicle_Failure());
  }
};

export const createvehicle = (values) => async (dispatch) => {
  dispatch(getvehicle());
  const key = "create";
  try {
    const { data } = await axios.post(
      keyUri.BACKEND_URI + `api/createvehicle`,
      values,
      config
    );
    toast.success(data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(fetchAllvehicle());
  } catch ({ response }) {
    toast.error(response.data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_vehicle_Failure());
  }
};

export const fetchonevehicle = (id) => async (dispatch) => {
  dispatch(getvehicle());
  const key = "fetchOnevehicle";
  try {
    const { data } = await axios.get(
      keyUri.BACKEND_URI + `/api/get-vehicle/${id}`,
      config
    );
    dispatch(getCurrentSuccess(data));
  } catch (error) {
    dispatch(get_vehicle_Failure());
  }
};

export const updatevehicle = (values, id) => async (dispatch) => {
  const key = "vehicle";
  dispatch(getvehicle());

  try {
    const { data } = await axios.put(
      keyUri.BACKEND_URI + `/api/update-vehicle/${id}`,
      values,
      config
    );

    toast.success(data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(fetchAllvehicle());
  } catch ({ response }) {
    // Show error message using Typography
    toast.error(response.data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_vehicle_Failure());
  }
};

export const deletevehicle = (id) => async (dispatch) => {
  dispatch(getvehicle());
  const key = "create";
  try {
    const { data } = await axios.delete(
      keyUri.BACKEND_URI + `/api/delete-vehicle/${id} `,
      config
    );
    if (data && data.msg) {
      // Show success toast if 'msg' exists in the response
      toast.success(data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(fetchAllvehicle());
    } else {
      console.error("Unexpected response format:", data);
      dispatch(get_vehicle_Failure());
    }
  } catch (error) {
    console.error("An error occurred:", error);
    toast.error("An error occurred", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_vehicle_Failure());
  }
};

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    window.location.href = "/";
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const fetchvehiclelogin = (logindata) => async (dispatch) => {
  dispatch(getvehicle());
  try {
    const { data } = await axios.post(
      keyUri.BACKEND_URI + "/api/dealerAuth",
      logindata,
      config
    );

    dispatch(getAuthenticate(data));
    localStorage.setItem("token", JSON.stringify(data.accessToken));
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const fetchDealerProfile = (token) => async (dispatch) => {
  const loginConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(getvehicle());
  try {
    const { data } = await axios.get(
      keyUri.BACKEND_URI + "/dealerProfile",
      loginConfig
    );
    dispatch(getvehicleProfile(data));
  } catch (error) {
    dispatch(logOut());
  }
};

export const get_vehicle_based_on_route = (values) => async (dispatch) => {
  const key = "vehicle";
  dispatch(getvehicle());

  try {
    const { data } = await axios.post(
      keyUri.BACKEND_URI + `/get-vehicles-on-route`,
      values,
      config
    );

    dispatch(getCurrentSuccess(data));
  } catch ({ response }) {
    dispatch(get_vehicle_Failure());
  }
};

export default vehicleSlice.reducer;
