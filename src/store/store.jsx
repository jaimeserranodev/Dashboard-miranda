import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/BookingSlice';
import roomReducer from '../features/roomSlice';


export const store = configureStore({
    reducer: {
        booking: bookingReducer,
        rooms: roomReducer,
    },
});
export default store;
