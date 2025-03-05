import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { keyUri,config } from "../key";
import { toast } from 'react-toastify';



const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
// const token = storedToken ? storedToken.slice(1, -1) : null;
const driver = localStorage.getItem('userinfo') ? localStorage.getItem('userinfo') :null
const initialState = {
    loading : false,
    hasError : false,
    isAuthenticate : token ? true :false,
    driverr : driver,
    token: token,
    userProfile: null,
   
}

export const authenticateSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
      getlogin:(state)=>{
        state.loading=true;
      },
      getAuthenticate:(state,{payload})=>{
        state.loading = false;
        state.isAuthenticate = true;
        state.driverr = payload.user;
        state.token = payload.accessToken;
      },
      isAuthenticateError:(state)=>{
        state.hasError = true;
        state.loading = false;
        state.isAuthenticate = false;
      },
      getdriverProfile:(state,{payload})=>{
        state.loading = false;
        state.userProfile = payload;
        state.isAuthenticate = true;
    },
    getlogout: state => {
      state.driverr = null
      state.loading = false
      state.isAuthenticate = false
      state.logpopUp = false
    },
}
})

export const {getdriverProfile,getAuthenticate,getlogin,isAuthenticateError,getlogout} = authenticateSlice.actions

export const authenticateSelector = (state)=> state.auth

export default authenticateSlice.reducer;

export const fetchlogin = (logindata)=>async(dispatch)=>{
    dispatch(getlogin())
    try{
        const {data} = await axios.post(keyUri.BACKEND_URI + "/driverAuthoo",logindata,config)
        

        console.log(data)
        toast.success(data?.msg,{
          
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        })
        dispatch(getAuthenticate(data));
           localStorage.setItem("token", JSON.stringify(data.accessToken));
          
    
           localStorage.setItem("name", JSON.stringify(data.driver.driver_name));
      }
    catch (error) {
        toast.error (error?.response?.data?.msg, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
      })
        dispatch(isAuthenticateError());
      }
}


export const logOut = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch(getlogout())
    window.location.reload();
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
    dispatch(getlogin());
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + "/driverProfile", loginConfig);
      dispatch(getdriverProfile(data));
    } catch (error) {
      dispatch(logOut());
    }
  };