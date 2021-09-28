import React from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';
import Pagination from '../pagination/pagination';

function ContactList(props) {
  const {
    items,
    itemsPerPage,
    pageCount,
    pageNumberClickHandler
  } = props;

  return (
    <Fragment>
      <ul className="cities__places-list places__list tabs__content">
        {items.map((contact) => (
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
      {/* comparison was added to don't show pagination if there are too little amount of items */}
      {items.length > itemsPerPage && <Pagination pageCount={pageCount} onPageNumberClick={pageNumberClickHandler}/>}
    </ Fragment>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactProp),
  onListItemHover: PropTypes.func,
};

export default ContactList;
