import { createSlice } from "@reduxjs/toolkit";
import roomListData from "../pages/rooms/roomListData.json";
import { sortRoomsByStatus, sortRoomsByPrice } from "../pages/rooms/logica/roomUtils";

let initialState = {
  list: roomListData,
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
  },
});

export const { sortByStatus, sortByPrice, addRoom } = roomSlice.actions;
export default roomSlice.reducer;
