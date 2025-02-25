import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { keyUri, config } from "../key";
import { toast } from "react-toastify";

const token = localStorage.getItem("authToken")
  ? localStorage.getItem("authToken")
  : null;

const driver = localStorage.getItem("driver")
  ? localStorage.getItem("driver")
  : null;

const initialState = {
  all_driver: [],
  loading: false,
  hasError: false,
  current_driver: null,
  driverAuthenticate: token ? true : false,
  driver: driver,
  token: token,
  driverData: null,
  otpSent:false,
  loading: false,
  error: null,
  user:null,
};

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    getdriver: (state) => {
      state.loading = true;
    },

    getAll_driver_success: (state, { payload }) => {
    
      state.loading = false;
      state.all_driver = payload;
    },
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token || null;
      state.loginMethod = action.payload.loginMethod;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loginMethod = null;
    },

    getCurrentSuccess: (state, { payload }) => {
      state.loading = false;
      state.current_driver = payload;
      state.driverData = payload;
      state.otpSent=true
    },

    get_driver_Failure: (state) => {
      state.loading = false;
      state.hasError = true;
    },

    getAuthenticate: (state, { payload }) => {
      state.loading = false;
      state.driverAuthenticate = true;
      state.driver= payload.driver;
      state.token = payload.accessToken;
    },

    isAuthenticateError: (state) => {
      state.hasError = true;
      state.loading = false;
      state.driverAuthenticate = false;
    },

    getdriverProfile: (state, { payload }) => {
      state.loading = false;
      state.driver = payload;
      state.driverAuthenticate = true;
    },
  },
});

export const {
  getdriver,
  getAll_driver_success,
  getCurrentSuccess,
  get_driver_Failure,
  getdriverProfile,
  getAuthenticate,
  isAuthenticateError,
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout 
} = driverSlice.actions;

export const driverSelector = (state) => state.driver;

export const fetchAlldriver = () => async (dispatch) => {
  dispatch(getdriver());
  const key = "fetchAlldriver";
  try {
    const { data } = await axios.get(keyUri.BACKEND_URI + `/api/get-all-drivers`, config);
    dispatch(getAll_driver_success(data));
  } catch (error) {
    dispatch(get_driver_Failure());
  }
};

export const createdrivers = (values) => async (dispatch) => {
  dispatch(getdriver());
  const key = "create";
  try {
    const { data } = await axios.post(
      keyUri.BACKEND_URI + `/api/createdriver`,
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
    dispatch(fetchAlldriver());
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
    dispatch(get_driver_Failure());
  }
};

export const fetchOnedriver = (id) => async (dispatch) => {
  dispatch(getdriver());
  const key = "fetchOnedriver";
  try {
    const { data } = await axios.get(
      keyUri.BACKEND_URI + `/api/get-driver/${id}`,
      config
    );
    dispatch(getCurrentSuccess(data));
  } catch (error) {
    dispatch(get_driver_Failure());
  }
};


export const fetchOnedriverOtp = (phone) => async (dispatch) => {
  dispatch(getdriver());
  const key = "fetchOnedriver";
  try {
    const { data } = await axios.post(keyUri.BACKEND_URI + "/api/driver/otp", {
      phone_no: phone,
    });
    dispatch(getCurrentSuccess(data));
    toast.success(data.message, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
   
    dispatch(get_driver_Failure());
    console.log(error);
    toast.error(error?.response?.data?.err, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const verifyOtp = (otp, phone) => async (dispatch) => {
  dispatch(getdriver());
  const key = "fetchOnedriver";
  try {
    const { data } = await axios.post(keyUri.BACKEND_URI + "/api/verify-otp", {
      enteredOTP: otp,
      phone_no: phone,
    });
   
    dispatch(getCurrentSuccess(data));
    localStorage.setItem("driver", JSON.stringify(data._id));
    toast.success("Login Sucessfull", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(getAuthenticate(data));

  } catch (error) {
    dispatch(get_driver_Failure());
  }
};

export const logOut = () => async (dispatch) => {
  try {
    // Remove token and driver data from local storage
    localStorage.clear();
    window.location.href = "/";
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const updatedriver = (values, id) => async (dispatch) => {
  const key = "driver";
  dispatch(getdriver());

  try {
    const { data } = await axios.put(
      keyUri.BACKEND_URI + `/api/update-driver/${id}`,
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
    dispatch(fetchAlldriver());
  } catch ({ response }) {
    // Show error message using Typography
    toast.success(response.data.msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_driver_Failure());
  }
};

export const deletedriver = (id) => async (dispatch) => {
  dispatch(getdriver());
  const key = "create";
  try {
    const { data } = await axios.delete(
      keyUri.BACKEND_URI + `/api/delete-driver/${id} `,
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
      dispatch(fetchAlldriver());
    } else {
     
      dispatch(get_driver_Failure());
    }
  } catch (error) {
    
    toast.error("An error occurred", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(get_driver_Failure());
  }
};


export const fetchdriverlogin = (logindata) => async (dispatch) => {
  dispatch(getdriver());
  try {
    const { data } = await axios.post(
      keyUri.BACKEND_URI + "/api/driverAuth",
      logindata,
      config
    );

    dispatch(getAuthenticate(data));
    localStorage.setItem("authToken", JSON.stringify(data.accessToken));
  } catch (error) {
    dispatch(isAuthenticateError());
  }
};

export const fetchdriverProfile = (token) => async (dispatch) => {
  const loginConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(getdriver());
  try {
    const { data } = await axios.get(
      keyUri.BACKEND_URI + "/api/driverProfile",
      loginConfig
    );
    dispatch(getdriverProfile(data));
  } catch (error) {
   
    dispatch(logOut());
  }
};

export default driverSlice.reducer;