import { createSlice } from '@reduxjs/toolkit'
import { getContactList, createContact, updateContact, archiveContactById } from "../contact/ContactThunks";
import { Contact, Status } from '../../types/features';

export interface ContactState {
  data: Contact[];
  status: Status;
  error: Error | undefined;
}

const initialState = {
  data: [],
  status: 'not-loaded',
  error: undefined
} as ContactState;

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getContactList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getContactList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getContactList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })

    .addCase(archiveContactById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(archiveContactById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(archiveContactById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })
   
    .addCase(createContact.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createContact.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createContact.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'loaded';
    })

    .addCase(updateContact.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateContact.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    })
  }
})

export const contactReducer = contactSlice.reducer