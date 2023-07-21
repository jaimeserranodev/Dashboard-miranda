import { createSlice } from "@reduxjs/toolkit";
import contactListData from "../pages/contact/contactListData.json"

let initialState = {
    list: contactListData,
    sortBy: 'date',
}

let ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        
        },
        }
    )
    
    export default ContactSlice.reducer;
