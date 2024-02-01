import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getRoomList, createRoom, deleteRoomById, updateRoom, getRoomById } from './roomThunks';
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
  reducers: {
    addRooms: (state: RoomState, action: PayloadAction<any[]>) => {
      console.log('getRoomList', action.payload);
      state.status = 'loaded';
      state.data.roomList = action.payload.map((room) => ({
        ...room
      }));
    },
    selectRoom: (state: RoomState, action: PayloadAction<any>) => {
      state.data.selectedRoom = action.payload; // Actualiza la habitación seleccionada
    },


    _extraReducers: (builder:any) => {
      builder
        .addCase(getRoomList.rejected, (state: { error: Error; status: string; }, action: PayloadAction<Error>) => {
          state.error = action.payload;
          state.status = 'rejected';
        })
        .addCase(getRoomList.pending, (state: RoomState) => {
          state.status = 'pending';
        })
        .addCase(getRoomList.fulfilled, (state: RoomState, action: PayloadAction<Room[]>) => {
          state.data.roomList = action.payload;
          state.status = 'loaded';
        })

        .addCase(getRoomById.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
          state.error = action.payload;
          state.status = 'rejected';
        })
        .addCase(getRoomById.pending, (state: { status: string; }) => {
          state.status = 'pending';
        })
        .addCase(getRoomById.fulfilled, (state: { data: { selectedRoom: any; }; status: string; }, action: { payload: any; }) => {
          state.data.selectedRoom = action.payload;
          state.status = 'loaded';
        })

        .addCase(deleteRoomById.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
          state.error = action.payload;
          state.status = 'rejected';
        })
        .addCase(deleteRoomById.pending, (state: { status: string; }) => {
          state.status = 'pending';
        })
        .addCase(deleteRoomById.fulfilled, (state: { data: { roomList: any; }; status: string; }, action: { payload: any; }) => {
          state.data.roomList = state.data.roomList.filter((room: { _id: any; }) => room._id !== action.payload);
          state.status = 'loaded';
        })

        .addCase(createRoom.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
          state.error = action.payload;
          state.status = 'rejected';
        })
        .addCase(createRoom.pending, (state: { status: string; }) => {
          state.status = 'pending';
        })
        .addCase(createRoom.fulfilled, (state: { data: { roomList: any[]; }; status: string; }, action: { payload: any; }) => {
          const newRoom = action.payload;
          state.data.roomList.push(newRoom);
          state.status = 'loaded';
        })

        .addCase(updateRoom.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
          state.error = action.payload;
          state.status = 'rejected';
        })
        .addCase(updateRoom.pending, (state: { status: string; }) => {
          state.status = 'pending';
        })
        .addCase(updateRoom.fulfilled, (state: { data: { roomList: any; }; status: string; }, action: { payload: any; }) => {
          state.data.roomList = action.payload;
          state.status = 'loaded';
        });
    },
  get extraReducers() {
    return this._extraReducers;
  },
  set extraReducers(value) {
    this._extraReducers = value;
  },
} })

export const { addRooms } = roomSlice.actions


export const roomReducer = roomSlice.reducer