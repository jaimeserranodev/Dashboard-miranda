import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import contactJson from '../../pages/contact/ContactData.json';
import { Contact } from "../../types/features";
import { RootState } from "../../store/store";
import client from "../../api/httpclient";
import { addContact } from "./ContactSlice";
import { Dispatch } from "redux";

interface ThunkApiConfig {
  dispatch: Dispatch<any>; // Asegúrate de importar Dispatch desde 'redux'
}

export const getContactList = createAsyncThunk<Contact[], void, ThunkApiConfig>(
  'contact/getContactListStatus',
  async(_,  thunkAPI ) => {
      const { dispatch } = thunkAPI;
      try {
        const response = await client.get<Contact[]>('/contact');
        dispatch( addContact (response.data) );
        return response.data;
      } catch (error) {
        throw error;
      }
  }
)

export const archiveContactById = createAsyncThunk<Contact[], string, { state: RootState, rejectValue: Error }>(
  'contact/archiveContactByIdStatus',
  async (_id , { getState, rejectWithValue }) => {
    try {
      const currentState = getState();
      const updatedContacts = currentState.contact.data.contactList.map((contact: Contact) => {
        if (contact._id === _id) {
          return {
            ...contact,
            archived: true
          };
        } else {
          return contact;
        }
      });

      return updatedContacts;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);

export const createContact = createAsyncThunk<Contact, Omit<Contact, '_id'>, { state: RootState, rejectValue: Error }>(
  'contact/createContactStatus',
  async(contact, { rejectWithValue }) => {
    try {
      const response = await client.post<Contact>('/contact', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const updateContact = createAsyncThunk<void, Contact, { state: RootState, rejectValue: Error }>(
  'contact/updateContactStatus',
  async(updateContact, { getState, rejectWithValue }) => {
    try {
      const response = await client.put<Contact>(`/contact/${updateContact._id}`, updateContact);
      if (response.status === 200) {
        return;
      } else {
        throw new Error('No se pudo actualizar el contacto.');
      }
      
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)
