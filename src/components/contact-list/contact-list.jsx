import PropTypes from 'prop-types';
import React from 'react';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';

function ContactList(props) {
  const {contacts} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          lastName={contact.lastName}
          group={contact.group}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactProp),
  onListItemHover: PropTypes.func,
};

export default ContactList;
