import { createSlice } from '@reduxjs/toolkit'
import { updateUser, deleteUserById, createUser, getUserList } from './UserThunks'
import { Status, User } from '../../types/features';

export interface UserState {
  data: User[];
  status: Status;
  error: Error | undefined;
}

const initialState = {
  data: [],
  status: 'not-loaded',
  error: undefined
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUserList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getUserList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getUserList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })

    .addCase(deleteUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteUserById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteUserById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })
   
    .addCase(createUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createUser.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'loaded';
    })

    .addCase(updateUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateUser.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })
  }
})

export const userReducer = userSlice.reducer

export { getUserList, deleteUserById };
