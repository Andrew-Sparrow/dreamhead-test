import {combineReducers} from 'redux';
import {places} from './contacts/contacts';

export const NameSpace = {
  CONTACTS: 'CONTACTS',
};

export default combineReducers({
  [NameSpace.CONTACTS]: places,
});
