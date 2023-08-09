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
      const response = await client.get<BookingType[]>("/bookings", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW4ifSwiaWF0IjoxNjkxNTAzODE4fQ.0f8fFpeszw71GovDe6mS9UB6vf3Cim5JtzuD8KtjAGI`,
        },
      });
      dispatch(addBooks(response.data));
      return response.data;
    } catch (error) {
      throw error; // Lanza el error para que createAsyncThunk maneje el rechazo correctamente
    }
  }
);

// export const getBookingList = createAsyncThunk<BookingType[], void, { rejectValue: Error }>(
//     'booking/getBookingListStatus',
//     async(_, { dispatch }) => {
//         try {
//             const response = await client.get<BookingType[]>('/bookings');
//             dispatch(addBooks(response.data));

//         } catch (error) {
//             return error;
//         }
//     }
// );

// try {
//     const response = await client.get<BookingType[]>('/booking');
//     console.log(response);
//     // return new Promise<BookingType[]>((resolve) => {

//     // });
// } catch (error) {
//     return error;
// }
// }

// dispatch(addBooks(BookingData));
//                     resolve(BookingData);
