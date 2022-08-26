import PropTypes from 'prop-types';

export const Filter = ({ filterProp, value }) => {

  const filter = e => {
    filterProp(e.currentTarget.value);
  };

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
        value={value}
        onChange={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  filterProp: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
