import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("phonebook/filterContacts");

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);

export const fetchContactsError = createAction("contacts/fetchContactsError");
export const fetchAddToContactsRequest = createAction(
  "contacts/fetchAddToContactsRequest"
);
export const fetchAddToContactsSuccess = createAction(
  "contacts/fetchAddToContactsSuccess"
);
export const fetchAddToContactsError = createAction(
  "contacts/fetchAddToContactsError"
);
export const fetchDeleteRequest = createAction("contacts/fetchDeleteRequest");
export const fetchDeleteSuccess = createAction("contacts/fetchDeleteSuccess");
export const fetchDeleteError = createAction("contacts/fetchDeleteError");
