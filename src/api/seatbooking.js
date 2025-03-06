import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { keyUri } from "../key";
import { toast } from "react-toastify";


const initialState = {
    loading: false,
    getAllBooks: [],
    getOneBook:null,
};

export const getBookSeatSlice = createSlice({
    name: "seatBook",
    initialState,
    reducers: {
        getSeatBook: (state) => {
            state.loading = true;
        },
        getSeatBooks: (state, { payload }) => {
            state.loading = false;
            state.getAllBooks = payload;
        },
        getOneSeatBooks: (state, { payload }) => {
            state.loading = false;
            state.getOneBook = payload;
        },
        getSeatBookFailure: (state, { payload }) => {
            state.loading = false;
            state.getAllBooks = payload
        }
     
    },
});

export const { getSeatBook, getSeatBooks, getOneSeatBooks, getSeatBookFailure } = getBookSeatSlice.actions;
export const seatBookSelector = (state) => state.seatBook;
export default getBookSeatSlice.reducer;



/**
 * 🔹 Fetch User Details API
 */
export const getAllBookings = (driverId) => async (dispatch) => {
    dispatch(getSeatBook());

    try {
        const { data } = await axios.get(`${keyUri.BACKEND_URI}/api/driversideBokking/${driverId}`);
        
        
        console.log(data)
   
        dispatch(getSeatBooks(data));
    } catch (e) {
        dispatch(getSeatBookFailure());
    }
};



export const getOneBookings = (id) => async (dispatch) => {
    dispatch(getSeatBook());

    try {
        const { data } = await axios.get(`${keyUri.BACKEND_URI}/api/getOneBooking/${id}`);
        console.log(data)
   
        dispatch(getOneSeatBooks(data));
    } catch (e) {
        dispatch(getSeatBookFailure());
    }
};


export const updateSeatBooks = (id, updateData) => async (dispatch) => {
    console.log("Updating seat booking for:", id, updateData);
    
    dispatch(getSeatBook());

    try {
        const { data } = await axios.put(`${keyUri.BACKEND_URI}/api/updateBooking/${id}`, updateData);
        
        console.log("Updated Booking Response:", data);

        toast.success(data?.msg || "Booking updated successfully!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        // dispatch(getOneBookings(id));
    } catch (e) {
        console.error("Error updating seat booking:", e);
        dispatch(getSeatBookFailure());
    }
};

