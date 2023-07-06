import { createSlice } from "@reduxjs/toolkit";
import BookingDaata from "../pages/booking/BookingDaata.json"

let initialState = {
    list: BookingDaata
}

let bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        
        sortBy: (state, action) => {
            switch (action.payload) {
                case 'guest':
                    state.list.sort((a, b) => a.guest.localeCompare(b.guest));
                    break;
                case 'orderDate':
                    state.list.sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'checkIn':
                    state.list.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));
                    break;
                case 'checkOut':
                    state.list.sort((a, b) => new Date(a.checkOut) - new Date(b.checkOut));
                    break;
                default:
                    break;
            }
        },
        }
    })

export default bookingSlice.reducer;
export const {  sortBy } = bookingSlice.actions