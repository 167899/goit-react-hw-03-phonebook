import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    filterProp: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  hendleChange = e => {
    this.filter(e);
  };

  filter = e => {
    const filterValue = e.currentTarget.value;
    this.props.filterProp(filterValue);
  };

  render() {
    return (
      <label>
        <h6
          style={{
            margin: '10px 0',
            color: '#010101',
          }}
        >
          Finde contact by name
        </h6>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Search may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.props.value}
          onChange={this.hendleChange}
        />
      </label>
    );
  }
}
