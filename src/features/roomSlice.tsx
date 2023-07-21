import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roomListData from "../pages/rooms/roomListData.json";
import { sortRoomsByStatus, sortRoomsByPrice } from "../pages/rooms/logica/roomUtils";


export interface Room {
  photo: string;
  roomNumber: string;
  id: number;
  roomType: string;
  Amenities: string;
  price: string;
  offerPrice: number;
  status: string;
}

interface RoomState {
  list: Room[];
  originalList: Room[];
  sortBy: 'roomNumber' | 'status' | 'price' | 'allRooms' | 'available' | 'booked';
}



let initialState: RoomState = {
  list: roomListData as Room[],
  originalList: roomListData as Room[],
  sortBy: 'roomNumber',
};

let roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    sortByStatus: (state) => {
      state.list = sortRoomsByStatus([...state.list]);
      state.sortBy = 'status';
    },
    sortByPrice: (state) => {
      state.list = sortRoomsByPrice([...state.list]);
      state.sortBy = 'price';
    },
    addRoom: (state, action) => {
        state.list.unshift(action.payload);
    },
    sortByAllRooms: (state) => {
      state.list = state.originalList;
      state.sortBy = 'allRooms';
    },
    sortByAvailable: (state) => {
      state.list = state.originalList.filter(room => room.status === 'Available');
      state.sortBy = 'available';
    },
    sortByBooked: (state) => {
      state.list = state.originalList.filter(room => room.status === 'Booked');
      state.sortBy = 'booked';
    },
    
    
  },
});
export const { sortByStatus, sortByPrice, sortByAllRooms, sortByAvailable, sortByBooked, addRoom, } = roomSlice.actions;
export default roomSlice.reducer;


export const selectRooms = (state: RoomState) => state.list;
export const selectSortBy = (state: RoomState) => state.sortBy;