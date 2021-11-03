import * as fetchStatus from "./contacts-actions";
import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContact,
} from "../../services/contactApi";

export const fetchAllContacts = () => async (dispatch) => {
  dispatch(fetchStatus.fetchContactsRequest());
  try {
    const contacts = await fetchContacts();
    dispatch(fetchStatus.fetchContactsSuccess(contacts));
  } catch (error) {
    alert("Something whent wrong...");
    dispatch(fetchStatus.fetchContactsError("Something whent wrong..."));
  }
};

export const fetchAddContactToDb = (data) => async (dispatch) => {
  dispatch(fetchStatus.fetchAddToContactsRequest());
  try {
    await fetchAddContacts(data);
    dispatch(fetchStatus.fetchAddToContactsSuccess());
    dispatch(fetchAllContacts());
  } catch (error) {
    alert("Something whent wrong...");
    dispatch(fetchStatus.fetchAddToContactsError);
  }
};

export const fetchDelete = (id) => async (dispatch) => {
  dispatch(fetchStatus.fetchDeleteRequest());
  try {
    await fetchDeleteContact(id);
    dispatch(fetchStatus.fetchDeleteSuccess());
    dispatch(fetchAllContacts());
  } catch (error) {
    console.log(error);
    alert("You can not delete the contact");
    dispatch(fetchStatus.fetchDeleteError());
  }
};
