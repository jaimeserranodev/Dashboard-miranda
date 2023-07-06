import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/BookingSlice';
import loginReducer from "../features/loginSlice";


export const store = configureStore({
    reducer: {
        booking: bookingReducer,
        login: loginReducer,
    },
});
export default store;
