import {combineReducers} from 'redux';
import {places} from './places/places';

export const NameSpace = {
  CONTACTS: 'CONTACTS',
};

export default combineReducers({
  [NameSpace.CONTACTS]: places,
});
