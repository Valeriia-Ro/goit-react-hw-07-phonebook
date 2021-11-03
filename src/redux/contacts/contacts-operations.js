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
    dispatch(fetchStatus.fetchContactsError(alert("Something whent wrong...")));
  }
};

export const fetchAddContactTo = (data) => async (dispatch) => {
  dispatch(fetchStatus.fetchAddToContactsRequest());
  try {
    await fetchAddContacts(data);
    dispatch(fetchStatus.fetchAddToContactsSuccess());
    dispatch(fetchAllContacts());
  } catch (error) {
    dispatch(
      fetchStatus.fetchAddToContactsError(alert("Something whent wrong..."))
    );
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

    dispatch(
      fetchStatus.fetchDeleteError(alert("You can not delete the contact"))
    );
  }
};
