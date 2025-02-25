import { createSlice } from "@reduxjs/toolkit";
import { KeyUri } from "../key";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    subProducts: [],
    currentSubProducts: null,
}

export const subProductsSlice = createSlice({
    name: 'subProducts',
    initialState,
    reducers: {
        getSubProducts: state => {
            state.loading = true;
        },
        getSubProductssuccess: (state, { payload }) => {
            state.loading = false;
            state.subProducts = payload
        },
        getCurrentSubProductssuccess: (state, { payload }) => {
            state.loading = false;
            state.currentSubProducts = payload;
        },
        getSubProductsFailure: (state, { payload }) => {
            state.loading = false;
            state.specialProducts = payload
        }
    }
})

export const { getSubProducts, getSubProductssuccess, getCurrentSubProductssuccess, getSubProductsFailure } = subProductsSlice.actions
export const subProductSelector = state => state.subProducts
export default subProductsSlice.reducer


// Create special products
export const createSubProducts = (values, nav) => async (dispatch) => {
    dispatch(getSubProducts());
    try {
        const { data } = await axios.post(KeyUri.BACKEND_URI + "/createSubProducts", values);
        toast.success(data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined
        })
        dispatch(getSupllierSubProducts());
        setTimeout(()=>{
            nav("/subProducts");
            },1500)
    } catch ({ response }) {
        toast.error(response.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        dispatch(getSubProductsFailure());
    }
}

// Get the special products by suppliers
export const getSupllierSubProducts = () => async (dispatch) => {
    dispatch(getSubProducts());
    try {
        const { data } = await axios.get(KeyUri.BACKEND_URI + `/getAllSubProducts`);
        dispatch(getSubProductssuccess(data));
    } catch ({ response }) {
        dispatch(getSubProductsFailure());
    }
}

//Get one special product 
export const getOneSubProduct = (id) => async (dispatch) => {
    dispatch(getSubProducts());
    try {
        const { data } = await axios.get(KeyUri.BACKEND_URI + `/getOneSubProducts/${id}`);
        dispatch(getCurrentSubProductssuccess(data));
    } catch ({ response }) {
        dispatch(getSubProductsFailure());
    }
}

//Update special products

export const updateSubProduct = (id, values) => async (dispatch) => {
    dispatch(getSubProducts());
    try {
        const { data } = await axios.put(KeyUri.BACKEND_URI + `/updateSubProducts/${id}`, values);
        toast.success(data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        })
        dispatch(getSupllierSubProducts(id))
    } catch ({ response }) {
        toast.success(response.data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        dispatch(getSubProductsFailure());
    }
}

//Delete special products

export const deleteSubProduct = (id,supId) => async (dispatch) => {
    dispatch(getSubProducts());
    try {
        const { data } = await axios.delete(KeyUri.BACKEND_URI + `/deleteSubProducts/${id}`);
        toast.success(data.msg, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(getSupllierSubProducts())
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
        dispatch(getSubProductsFailure());
    }
}
