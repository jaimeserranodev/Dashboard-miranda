import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {  getUserList, deleteUserById, updateUser, createUser } from './UserThunks'
// createUser,updateUser, deleteUserById
import { Status, User } from '../../types/features';
import { RoomState } from '../rooms/roomSlice';
export interface UserState {
  data: {
    User: User[],
    selectedUser: User | null,
  };

  status: Status;
  error: Error ;
}

const initialState = {
  data: {
    User: [],
    selectedUser: null,
  },
  status: 'not-loaded',
  error: null,
} as unknown as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsers: (state: UserState, action: PayloadAction<any[]>) => {
      console.log("getUserList", action.payload);
      state.status = "loaded";
      state.data.User = action.payload.map((users) => ({
        ...users
      }));
    
    },
    selectUser: (state: UserState, action: PayloadAction<any>) => {
      state.data.selectedUser = action.payload; // Actualiza la habitación seleccionada
    },
  },


  extraReducers: (builder:any) => {
    builder
    .addCase(getUserList.rejected, (state: { error: Error; status: string; }, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getUserList.pending, (state: UserState) => {
      state.status = 'pending';
    })
    .addCase(getUserList.fulfilled, (state: UserState, action: PayloadAction<User[]>) => {
      state.data.User = action.payload;
      state.status = 'loaded';
    })

    .addCase(deleteUserById.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteUserById.pending, (state: { status: string; }) => {
      state.status = 'pending';
    })
    .addCase(deleteUserById.fulfilled, (state: { data: { User: any; }; status: string; }, action: { payload: any; }) => {

      state.data.User = state.data.User.filter((user: { _id:any;  }) => user._id !== action.payload);
      state.status = 'loaded';
    })
   
    .addCase(createUser.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createUser.pending,  (state: { status: string; }) => {
      state.status = 'pending';
    })
    .addCase(createUser.fulfilled, (state: { data: { User: any[]; }; status: string; }, action: { payload: any; }) => {
      state.data.User.push(action.payload);
      state.status = 'loaded';
    })

    .addCase(updateUser.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateUser.pending,(state: { status: string; }) => {
      state.status = 'pending';
    })
    .addCase(updateUser.fulfilled, (state: { data: { User: any; }; status: string; }, action: { payload: any; }) => {
      state.data.User = action.payload;
      state.status = 'loaded';
    })
  } })

export const { addUsers } = userSlice.actions

export const userReducer = userSlice.reducer

// export { getUserList, deleteUserById };
