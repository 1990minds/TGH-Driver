import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {keyUri} from "../key";

export const initialState = {
  
  loading: false,
  hotels: [],
  exist_hotel: [],
  error: null,
};

export const hotelslice = createSlice({
  name: "hotel",
  initialState, 
  reducers: {
    getHotel: (state) => {
      state.loading = true;
    },
    getExistHotel: (state) => {
      state.loading = true;
    },
    getHotelSuccess: (state, { payload }) => {
 
      console.log(payload);
      state.hotels = payload;
      state.loading = false;
      state.error = null;
    },
    getUpdaHotelSuccess: (state, { payload }) => {
      console.log(payload);
      state.exist_hotel = payload; 
      state.loading = false;
      state.error = null;
    },
    getHotelFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    createHotelSuccess: (state, { payload }) => {
      state.hotels.push(payload);
      state.loading = false;
      state.error = null;
    },
    updateHotelSuccess:(state,{payload})=>{
      state.hotels.push(payload);
      state.loading = false;
      state.error = null;
    },
    deleteHotelSuccess:(state,{payload})=>{
      state.hotels.push(payload);
      state.loading = false;
      state.error = null;
    }

  },
});

export const {
  getHotel,
  getExistHotel,
  getHotelSuccess,
  getExistHotelSuccess,
  getHotelFailure,
  createHotelSuccess,
  updateHotelSuccess,
  deleteHotelSuccess
} = hotelslice.actions;

export const selectHotelState = (state) => state.hotel; 
export default hotelslice.reducer;

const config = {
  headers: {
    "Content-type": "application/json",
  },
};


export const fetchAllHotels = () => async (dispatch) => {
  dispatch(getHotel());
  try {
    const { data } = await axios.get(`${keyUri.BACKEND_URI}/api/gethotels`, config);
    console.log("Received Hotel data", data);
    dispatch(getHotelSuccess(data));
  } catch (error) {
    dispatch(getHotelFailure(error.message));
  }
};

export const fetchOneHotel = (id) => async (dispatch) => {
  dispatch(getHotel());
  try {
    const { data } = await axios.get(
      `${keyUri.BACKEND_URI}/gethotel/${id}`,
      config
    );
    dispatch(getHotelSuccess(data)); 
  } catch (error) {
    dispatch(getHotelFailure(error.message));
  }
};

export const createHotel = (hotelData) => async (dispatch) => {
  dispatch(getHotel());
  try {
    const { data } = await axios.post(
      `${keyUri.BACKEND_URI}/createhotel`,
      hotelData,
      config
    );
    dispatch(createHotelSuccess(data));
    dispatch(fetchAllHotels());
  } catch (error) {
    dispatch(getHotelFailure(error.message));
  }
};

export const updateHotel = (id,updatedata)=>async (dispatch)=>{
console.log("update function triigered in redux part of the hotel");
dispatch(getHotel());
try{
  const {data} = await axios.put(
`${keyUri.BACKEND_URI}/updatehotel/${id}`,
updatedata,
config
);
dispatch(updateHotelSuccess(data));
dispatch(fetchAllHotels());


}
catch(error){
  dispatch(getHotelFailure(error.message));
}
};

export const deleteHotel = (id)=>async (dispatch)=>{
  console.log("delete function triigered in redux part of the hotel");
  dispatch(getHotel())

  try{
const data = await axios.delete(`${keyUri.BACKEND_URI}/deletehotel/${id}`,config);
dispatch(deleteHotelSuccess(data));

  }
  catch(error){
    dispatch(getHotelFailure(error.message));
  }
}