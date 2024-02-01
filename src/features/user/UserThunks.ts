import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "../../types/features";
import { RootState } from "../../store/store";
import { Dispatch } from "redux";
import  client  from "../../api/httpclient";
import { AxiosError } from 'axios';
import { addUsers } from "./UserSlice";

interface ThunkApiConfig {
  dispatch: Dispatch<any>; // Asegúrate de importar Dispatch desde 'redux'
}
export const getUserList = createAsyncThunk<User[], void, ThunkApiConfig>(
  'user/getUserListStatus',
  async(__, thunkAPI ) => {
    const { dispatch } = thunkAPI;
        try {
            const response = await client.get<User[]>("/users"); 
            dispatch( addUsers   (response.data));    
            return response.data; 
        } catch (error) {
            throw error;
        }
    }
);


 
export const deleteUserById = createAsyncThunk<void, string, { state: RootState }>(
  'user/deleteUserByIdStatus',
  async(_id, { getState, rejectWithValue }) => {
    try {
      const response = await client.delete<User[]>(`/users/${_id}`);
      if (response.status === 200) {
        return;
      } else {
        throw new Error('No se pudo eliminar la habitación.');
      }
      
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const createUser = createAsyncThunk<User, Omit<User, '_id'>, { state: RootState, rejectValue: string }>(
  'user/createUserStatus',
  async (user, { rejectWithValue }) => {
    try {
      const response = await client.post<User>('/users', user);
      
      return response.data;
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'Error creating user';
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk<void, User, { state: RootState, rejectValue: Error }>(
  'user/updateUserStatus',
  async (updateUser, { getState, rejectWithValue }) => {
    try {
      const response = await client.put(`/users/${updateUser._id}`, updateUser);
      if (response.status === 200) {
        return;
      } else {
        // La actualización no tuvo éxito
        throw new Error('No se pudo actualizar el user.');
      }
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);
