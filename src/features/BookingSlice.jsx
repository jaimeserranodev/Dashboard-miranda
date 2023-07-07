import { createSlice } from "@reduxjs/toolkit";
import BookingDaata from "../pages/booking/BookingDaata.json"

let initialState = {
    list: BookingDaata,
    sortBy: 'guest',
}

let bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        
        sortBy: (state, action) => {
            const sortByValue = action.payload;
            switch (sortByValue) {
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
            state.sortBy = sortByValue;
        },
        }
    })
    export const {  sortBy } = bookingSlice.actions;    
    export default bookingSlice.reducer;
