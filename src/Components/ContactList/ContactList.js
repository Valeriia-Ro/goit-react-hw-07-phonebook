import React from "react";
import styles from "./ContactList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "../../redux/contacts/contacts-operations";
import { getItems, getFilter } from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );
  return (
    <ul className={styles.list_section}>
      {filtered.map(({ id, name, number }) => (
        <li key={id} className={styles.list_element}>
          <span>{name}: </span>
          <span>{number} </span>
          <button
            className={styles.list_button}
            type="button"
            name="delete"
            onClick={() => dispatch(fetchDelete(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
