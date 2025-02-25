import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from "../key";
import { toast } from 'react-toastify'




const initialState = {
   
    all_route:[],
    loading:false,
    hasError:false,
    current_route:null,
}


export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {

    getroute: state => {
      state.loading = true;
    },

    getAll_route_success: (state, {payload})  =>{
      console.log("------------>",payload)
      state.loading = false
      state.all_route = payload
    },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_route = payload 
    },

    get_route_Failure: (state) => {
      state.loading = false
      state.hasError = true
    },

   
    
   

  },
})


export const { getroute ,getAll_route_success, getCurrentSuccess, get_route_Failure} = routeSlice.actions;



export const routeSelector = state => state.route;



  export const fetchAllroute = () => async (dispatch) => {
    dispatch(getroute());
    const key = 'fetchAllroute';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/api/get-all-routes`,config); 
      console.log(data);
      dispatch(getAll_route_success(data));
    } catch (error) {
      dispatch(get_route_Failure());
    }
  };


export const createroute = (values) => async (dispatch) => {

  

  dispatch(getroute());
  const key = 'create'; 
  try {
  const { data } = await axios.post(keyUri.BACKEND_URI + `/api/createroute`,values,config);
  toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllroute());
    } catch ({ response }) {
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_route_Failure());
    }
  };



  export const fetchoneroute = (id) => async (dispatch) => {
    dispatch(getroute());
    const key = 'fetchOneroute';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/api/get-route/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_route_Failure());
    }
  };


  export const updateroute = (values, id) => async (dispatch) => {
   
    const key = 'route';
    dispatch(getroute());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/api/update-route/${id}`, values, config);
     
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
    dispatch(fetchAllroute());
    } catch ({ response }) {
      // Show error message using Typography
      toast.success (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_route_Failure());
    }
  };


  export const deleteroute = (id) => async (dispatch) => {
   
    dispatch(getroute());
    const key = 'create';
    try {
      const { data } = await axios.delete(keyUri.BACKEND_URI + `/api/delete-route/${id} `, config);
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
        dispatch(fetchAllroute());
      } else {
        console.error("Unexpected response format:", data);
        dispatch(get_route_Failure());
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
      dispatch(get_route_Failure());
    }
  };





export default routeSlice.reducer;
