import { createAsyncThunk } from "@reduxjs/toolkit";
import BookingData from "../../pages/booking/BookingData.json";
import { BookingType } from "../../types/features";
import { RootState } from "../../store/store";

export const getBookingList = createAsyncThunk<BookingType[], void, { rejectValue: Error }>(
    'booking/getBookingListStatus',
    async(_, { rejectWithValue }) => {
        try {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(BookingData as BookingType[]);
            }, 200);
        });
        } catch (error) {
            return rejectWithValue(error as Error);
        }
    }
)
