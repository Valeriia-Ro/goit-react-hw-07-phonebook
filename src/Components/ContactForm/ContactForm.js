import { useState } from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { fetchAddContactToDb } from "../../redux/contacts/contacts-operations";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/contacts/contacts-selectors";
import React from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const state = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = { name, number };
    const repeat = state.find((item) => item.number === value.number);
    if (repeat) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    dispatch(fetchAddContactToDb(value));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_section}>
      <label className={styles.form_label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          className={styles.form_input}
        />
      </label>
      <label className={styles.form_label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          className={styles.form_input}
        ></input>
      </label>

      <button type="submit" className={styles.form_button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
