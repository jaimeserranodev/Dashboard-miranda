import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import client from "../../api/httpclient";
import { BookingType } from "../../types/features";
import { addBooks } from "./BookingSlice";

interface ThunkApiConfig {
  dispatch: Dispatch<any>; // Asegúrate de importar Dispatch desde 'redux'
}

//Este metodo para la peticion a la apis
export const getBookingList = createAsyncThunk<BookingType[], void, ThunkApiConfig>(
  "booking/getBookingListStatus",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await client.get<BookingType[]>("/bookings");
      dispatch(addBooks(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
