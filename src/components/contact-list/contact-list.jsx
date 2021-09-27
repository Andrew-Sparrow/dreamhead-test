import React from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';
import Pagination from '../pagination/pagination';

function ContactList(props) {
  const {contacts} = props;

  return (
    <Fragment>
      <ul className="cities__places-list places__list tabs__content">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            lastName={contact.lastName}
            group={contact.group}
            phone={contact.phone}
            email={contact.email}
            avatar={contact.avatar}
          />
        ))}
      </ul>
      <Pagination perPage={3}/>
    </ Fragment>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactProp),
  onListItemHover: PropTypes.func,
};

export default ContactList;
