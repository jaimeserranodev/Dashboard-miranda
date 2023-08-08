import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getBookingList } from "./BookingThunks";
import { BookingType, Status } from "../../types/features";

export interface BookingState {
    data: BookingType[];
    status: Status;
    error: Error | undefined;
}

const initialState = {
    data: [],
    status: "not-loaded",
    error: undefined,
    } as BookingState;

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        //Cargar data / peticion - api
        addBooks: (state: BookingState, action: PayloadAction<any[]>) => {
        console.log('hola', action.payload);  
        state.data = action.payload;
        state.status = "loaded";
        state.data.sort(({ date: dateA }, { date: dateB }) => {
            const convertedDateA = convertToDate(dateA);
            const convertedDateB = convertToDate(dateB);
            return convertedDateA.getTime() - convertedDateB.getTime();
        });
        },
        sortByOrderDate: (
        state: BookingState,
        action: PayloadAction<BookingType[]>
        ) => {
        state.data = [...state.data].sort(({ date: dateA }, { date: dateB }) => {
            const convertedDateA = convertToDate(dateA);
            const convertedDateB = convertToDate(dateB);
            return convertedDateA.getTime() - convertedDateB.getTime();
        });
        },
        //make a reducer for each action
        sortByGuest: (state: any, action: PayloadAction<BookingType[]>) => {
            state.data = [...state.data].sort((a, b) =>
            a.guest.localeCompare(b.guest)
        );
        },
        sortByCheckIn: (state: any, action: PayloadAction<BookingType[]>) => {
        console.log('check-in', action.payload);  
            
            state.data = [...state.data].sort((a, b) => {
            const convertedDateA = convertToDate(a.checkIn);
            const convertedDateB = convertToDate(b.checkIn);
            return convertedDateA.getTime() - convertedDateB.getTime();
        });
        },
        sortByCheckOut: (state: any, action: PayloadAction<BookingType[]>) => {
        state.data = [...state.data].sort((a, b) => {
            const convertedDateA = convertToDate(a.checkOut);
            const convertedDateB = convertToDate(b.checkOut);
            return convertedDateA.getTime() - convertedDateB.getTime();
        });
        },
        sortByStatus: (state: any, action: PayloadAction<BookingType[]>) => {
        state.data = action.payload.sort(
            (a: any, b: any) => a.status?.localeCompare(b.status || "") || 0
        );
        },
    },
});

const convertToDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
};

export const {
    addBooks,
    sortByGuest,
    sortByCheckIn,
    sortByCheckOut,
    sortByOrderDate,
    sortByStatus,
    } = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;
