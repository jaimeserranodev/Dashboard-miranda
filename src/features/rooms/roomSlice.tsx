import { createSlice } from '@reduxjs/toolkit'
import { getRoomList, createRoom, deleteRoomById, updateRoom, getRoom } from './roomThunks';
import { Room, Status } from '../../types/features';

export interface RoomState {
  data: {
    roomList: Room[],
    selectedRoom: Room | null
  };
  status: Status;
  error: Error | undefined;
}

const initialState = {
  data: {
    roomList: [],
    selectedRoom: null,
  },
  status: 'not-loaded',
  error: undefined
} as RoomState;

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getRoomList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data.roomList = action.payload;
      state.status = 'loaded';
    })

    .addCase(getRoom.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getRoom.fulfilled, (state, action) => {
      state.data.selectedRoom = action.payload;
      state.status = 'loaded';
    })

    .addCase(deleteRoomById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteRoomById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data.roomList = action.payload;
      state.status = 'loaded';
    })

    .addCase(createRoom.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.roomList.push(action.payload);
      state.status = 'loaded';
    })
    
    .addCase(updateRoom.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateRoom.fulfilled, (state, action) => {
      state.data.roomList = action.payload;
      state.status = 'loaded';
    })
  }
})

export const roomReducer = roomSlice.reducer