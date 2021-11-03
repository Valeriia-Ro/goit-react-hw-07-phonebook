import React from "react";
// import PropTypes from 'prop-types';
import Container from "./Components/Container";
import ContactForm from "./Components/ContactForm/ContactForm";

import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />

      <ContactList />
    </Container>
  );
}
