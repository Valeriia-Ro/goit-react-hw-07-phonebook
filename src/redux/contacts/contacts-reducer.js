import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";
const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.fetchContactsError]: (state, _) => state,
});

const filterReducer = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsError]: () => false,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchAddToContactsRequest]: () => true,
  [actions.fetchAddToContactsError]: () => false,
  [actions.fetchAddToContactsSuccess]: () => false,
  [actions.fetchDeleteRequest]: () => true,
  [actions.fetchDeleteError]: () => false,
  [actions.fetchDeleteSuccess]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.fetchContactsRequest]: (_, { payload }) => null,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
