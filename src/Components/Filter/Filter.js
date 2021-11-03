import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={styles.filter_input}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(changeFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
