import React, {useState} from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from '../contact/contact';
import contactProp from '../contact/contact.prop';
import Pagination from '../pagination/pagination';

function ContactList(props) {
  const {items} = props;
  const ITEMS_PER_PAGE = 3;
  const selectedItemsOnFirstPage = items.slice(0, ITEMS_PER_PAGE);
  const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

  const [itemsOnPage, setItemsOnPage] = useState(selectedItemsOnFirstPage);

  const pageNumberClickHandler = (dataPagination) => {
    let offset = Math.ceil(dataPagination.selected * ITEMS_PER_PAGE);
    console.log(offset);
    let slicedItems = items.slice(offset, offset + ITEMS_PER_PAGE);
    setItemsOnPage(slicedItems);
  };

  return (
    <Fragment>
      <ul className="cities__places-list places__list tabs__content">
        {itemsOnPage.map((contact) => (
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
      {items.length > ITEMS_PER_PAGE && <Pagination pageCount={pageCount} onPageNumberClick={pageNumberClickHandler}/>}
    </ Fragment>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactProp),
  onListItemHover: PropTypes.func,
};

export default ContactList;
