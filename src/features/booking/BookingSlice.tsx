import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBookingList } from "./BookingThunks";
import { BookingType, Status } from "src/types/features";


interface BookingState {
    data: BookingType[];
    status: Status;
    error: Error | undefined;
    } 

    const initialState = {
        data: [],
        status: 'idle',
        error: undefined
        } as BookingState;

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        //make a reducer for each action
        sortByGuest: (state, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort((a, b) => a.guest?.localeCompare(b.guest || "") || 0);
        },
        sortByCheckIn: (state, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort((a, b) => new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime());
        },
        sortByCheckOut: (state, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort((a, b) => new Date(a.checkOut).getTime() - new Date(b.checkOut).getTime());
        },
        sortByOrderDate: (state, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        },
        sortByStatus: (state, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort((a, b) => a.status?.localeCompare(b.status || "") || 0);
        },

        
        
    },
    extraReducers: (builder) => {
        builder
        
    }
})
    export const { sortByGuest, sortByCheckIn, sortByCheckOut, sortByOrderDate, sortByStatus } = bookingSlice.actions
    export const bookingReducer = bookingSlice.reducer