import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/BookingSlice';
import roomReducer from '../features/roomSlice';
import contactReducer from "../features/ContactSlice"


export const store = configureStore({
    reducer: {
        booking: bookingReducer,
        rooms: roomReducer,
        contact: contactReducer,
    },
});
export default store;
