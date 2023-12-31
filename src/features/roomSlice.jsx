import { createSlice } from "@reduxjs/toolkit";
import roomListData from "../pages/rooms/roomListData.json";
import { sortRoomsByStatus, sortRoomsByPrice } from "../pages/rooms/logica/roomUtils";

let initialState = {
  list: roomListData,
  originalList: roomListData,
  sortBy: 'roomNumber',
};

let roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    sortByStatus: (state) => {
      state.list = sortRoomsByStatus(state.list);
      state.sortBy = 'status';
    },
    sortByPrice: (state) => {
      state.list = sortRoomsByPrice(state.list);
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
    
    addRoom: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});
export const { sortByStatus, sortByPrice, sortByAllRooms, sortByAvailable, sortByBooked, addRoom } = roomSlice.actions;
export default roomSlice.reducer;
