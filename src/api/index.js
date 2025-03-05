import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import driverReducer from './driver';
import assignmentReducer from "./assignments";
import Hotelreducer from "./Hotel";
import bookingReducer from './bookings';
import routeReducer from './route'
import vehicleReducer from './vehicle'
import seatBookReducer from './seatbooking'


export default configureStore({
  reducer: {
    auth: authReducer,
    driver: driverReducer,
    assignment:assignmentReducer,
    hotel:Hotelreducer,
    route: routeReducer,
    booking: bookingReducer,
    vehicle: vehicleReducer,
    seatBook:seatBookReducer
  },
});
