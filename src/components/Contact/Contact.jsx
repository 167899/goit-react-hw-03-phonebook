import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, del }) => {
  return (
    <>
      <li
        style={{
          color: '#010101',
          display: 'flex',
          width: '400px',
          marginBottom: '10px',
          justifyContent: 'space-between',
        }}
        id={id}
      >
        {name}: {number}
        <button type="button" onClick={del}>
          Delite
        </button>
      </li>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
