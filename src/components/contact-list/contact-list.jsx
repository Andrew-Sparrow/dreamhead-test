import PropTypes from 'prop-types';
import React from 'react';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';

function ContactList(props) {
  const {contacts, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          price={contact.price}
          onListItemHover={onListItemHover}
          title={contact.title}
          isPremium={contact.isPremium}
          isFavorite={contact.isFavorite}
          type={contact.type}
          rating={contact.rating}
          previewImage={contact.previewImage}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(contactProp),
  onListItemHover: PropTypes.func,
};

export default ContactList;
