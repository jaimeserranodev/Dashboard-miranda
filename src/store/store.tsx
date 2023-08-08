import { configureStore } from '@reduxjs/toolkit';
import { bookingSlice } from '../features/booking/BookingSlice';
import  {roomReducer } from '../features/rooms/roomSlice';
import { contactReducer } from "../features/contact/ContactSlice"
import { userReducer } from "../features/user/UserSlice"


export const store = configureStore({
    reducer: {
        booking: bookingSlice.reducer,
        rooms: roomReducer,
        contact: contactReducer,
        user: userReducer,
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
