import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export const ContactsList = ({ contacts, del }) => {
  return (
    <>
      <ul
        style={{
          padding: 0,
        }}
      >
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            del={del}
          />
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
