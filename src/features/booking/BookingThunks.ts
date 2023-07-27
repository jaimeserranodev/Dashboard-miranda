import { createAsyncThunk } from "@reduxjs/toolkit";
import BookingData from "../../pages/booking/BookingData.json";
import { BookingType } from "../../types/features";
import { addBooks } from "./BookingSlice";
// import { RootState } from "../../store/store";

export const getBookingList = createAsyncThunk<BookingType[], void, { rejectValue: Error }>(
    'booking/getBookingListStatus',
    async(_, { rejectWithValue, dispatch }) => {
        try {
            return new Promise<BookingType[]>((resolve) => {
                setTimeout(() => {
                    dispatch(addBooks(BookingData));
                    resolve(BookingData);
                }, 2000); // Tiempo en milisegundos (2 segundos)
            });
        } catch (error) {
            return rejectWithValue(new Error("Ha ocurrido un error al cargar los datos."));
        }
    }
);
