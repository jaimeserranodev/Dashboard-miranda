import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getContactList, createContact, archiveContactById } from "../contact/ContactThunks";
// ,  updateContact, 
import { Contact, Status } from '../../types/features';


export interface ContactState {
  data: {
    [x: string]: any;
    contactList: Contact[],
  };
  status: Status;
  error: Error | undefined;
}

const initialState: ContactState = {
  data: {
    contactList: [],
  },
  status: 'not-loaded',
  error: undefined
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state: ContactState, action: PayloadAction<any[]>) => {
      console.log("getContactList", action.payload);
      state.status = "loaded";
      state.data.contactList = action.payload.map((contact) => ({
        ...contact
      })) as Contact[]; // Convertir a Contact[]
    },

    selectContact: (state: ContactState, action: PayloadAction<any>) => {
      state.status = "loaded";
      state.data.contactList = action.payload.map((contact:any) => ({
        ...contact
      }));
    }
  },



  extraReducers: (builder:any) => {
    builder
    .addCase(getContactList.rejected, (state: { error: Error; status: string; }, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getContactList.pending,(state: ContactState)=> {
      state.status = 'pending';
    })
    .addCase(getContactList.fulfilled, (state: ContactState, action: PayloadAction<Contact[]>) => {
      state.data.contactList = action.payload;
      state.status = 'loaded';
    })

    .addCase(archiveContactById.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(archiveContactById.pending, (state: { status: string; }) => {
      state.status = 'pending';
    })
    .addCase(archiveContactById.fulfilled, (state: ContactState, action: PayloadAction<Contact[]>) => {
      // Actualiza el array contactList en el estado
      state.data.contactList = action.payload;
      state.status = 'loaded';
    })
   
    .addCase(createContact.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createContact.pending,  (state: { status: string; }) => {
      state.status = 'pending';
    })
    .addCase(createContact.fulfilled,  (state: { data: { contactList: any[]; }; status: string; }, action: { payload: any; }) => {
      state.data.contactList.push(action.payload);
      state.status = 'loaded';
    })

    // .addCase(updateContact.rejected, (state: { error: any; status: string; }, action: { payload: any; }) => {
    //   state.error = action.payload;
    //   state.status = 'rejected';
    // })
    // .addCase(updateContact.pending,(state: { status: string; }) => {
    //   state.status = 'pending';
    // })
    // .addCase(updateContact.fulfilled, (state: { data: { contactList: any; }; status: string; }, action: { payload: any; }) => {
    //   state.data.contactList = action.payload;
    //   state.status = 'loaded';
    // })
  }
})


export const { addContact } = contactSlice.actions

export const contactReducer = contactSlice.reducer