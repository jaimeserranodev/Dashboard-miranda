import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RoomData } from "../../pages/rooms/RoomData";
import { Room } from "../../types/features";
import { RootState } from "../../store/store";
import client from "../../api/httpclient";
import { Dispatch } from "redux";
import { addRooms } from "./roomSlice";
import axios from "axios";

interface ThunkApiConfig {
  dispatch: Dispatch<any>; // Asegúrate de importar Dispatch desde 'redux'
}

export const getRoomList = createAsyncThunk<Room[], void, ThunkApiConfig>(
    "rooms/getRoomListStatus",
    async (__, thunkAPI ) => {
        const { dispatch } = thunkAPI;
        try {
            const response = await client.get<Room[]>("/rooms"); 
            dispatch( addRooms   (response.data));    
            return response.data; 
        } catch (error) {
            throw error;
        }
    }
);

export const getRoomById = createAsyncThunk<Room, string, ThunkApiConfig>(
    'rooms/getRoomById',
    async (_id, thunkAPI) => {
        const { dispatch } = thunkAPI;
    try {
        const response = await client.get<Room>(`/rooms/${_id}`); // Realiza la solicitud con Axios
        dispatch(addRooms([response.data])) // Agrega la respuesta al store
        return response.data;
    } catch (error) {
        throw error;
    }
    }
);
export const createRoom = createAsyncThunk<Room, Omit<Room, '_id'>, { state: RootState, rejectValue: Error }>(
'room/createRoomStatus',
async (rooms, { getState, rejectWithValue }) => {
    try {
      const response = await client.post<Room>('/rooms', rooms); // Cambia la URL a la ruta de tu backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);

export const deleteRoomById = createAsyncThunk<void, string, { state: RootState }>(
  'booking/deleteRoomByIdStatus',
  async (_id, { dispatch, rejectWithValue }) => {
    try {
      const response = await client.delete(`/rooms/${_id}`);
      if (response.status === 204) {
        // Habitación eliminada exitosamente (estatus 204 No Content)
        dispatch(getRoomList()); // Obtén la lista de habitaciones actualizada
      } else {
        // La eliminación no tuvo éxito
        throw new Error('No se pudo eliminar la habitación.');
      }
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

  
  



// export const deleteRoomById = createAsyncThunk<Room[], string, { state: RootState, rejectValue: Error }>(
// 'booking/deleteRoomByIdStatus',
// async(_id, { getState, rejectWithValue }) => {
//     try {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         // resolve(
//         //     getState().rooms.data.roomList.filter((room: Room) => room.id !== roomId)
//         // );
//         }, 200);
//     });
//     } catch (error) {
//     return rejectWithValue(error as Error);
//     }
// }
// )
// export const getRoomList = createAsyncThunk<Room[], void, { rejectValue: Error }>(
// 'bookings/getRoomListStatus',
// async(_, { rejectWithValue }) => {
//     try {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(RoomData as Room[]);
//         }, 200);
//     });
//     } catch (error) {
//     return rejectWithValue(error as Error);
//     }
// }
// )
export const updateRoom = createAsyncThunk<void, Room, { state: RootState, rejectValue: Error }>(
  'room/updateRoomStatus',
  async (updatedRoom, { getState, rejectWithValue }) => {
    try {
      const response = await client.put(`/rooms/${updatedRoom._id}`, updatedRoom); // Cambia la URL a la ruta de tu backend
      if (response.status === 200) {
        // Habitación actualizada exitosamente (estatus 200 OK)
        return;
      } else {
        // La actualización no tuvo éxito
        throw new Error('No se pudo actualizar la habitación.');
      }
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);



// export const updateRoom = createAsyncThunk<Room[], Room, { state: RootState, rejectValue: Error }>(
// 'room/updateRoomStatus',
// async(updatedRoom, { getState, rejectWithValue }) => {
//     try {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         const updatedRooms = getState().rooms.data.roomList.map((room: Room) => {
//             if (room._id === updatedRoom._id) {
//             return updatedRoom;
//             } else {
//             return room;
//             }
//         });
//         resolve(updatedRooms);
//         }, 200);
//     });
//     } catch (error) {
//     return rejectWithValue(error as Error);
//     }
// }
// )

// function dispatch(arg0: AsyncThunkAction<Room, string, { dispatch: Dispatch<any>; state?: unknown; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
//     throw new Error("Function not implemented.");
// }
