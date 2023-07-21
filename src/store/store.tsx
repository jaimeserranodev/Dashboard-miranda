import { configureStore } from '@reduxjs/toolkit';
import {bookingReducer} from '../features/booking/BookingSlice';
import roomReducer from '../features/roomSlice';
import contactReducer from "../features/ContactSlice"


export const store = configureStore({
    reducer: {
        booking: bookingReducer,
        rooms: roomReducer,
        contact: contactReducer,
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
