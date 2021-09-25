import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadContacts,
  changeFavorite,
  resetFavorites
} from '../actions';

const initialState = {
  contacts: [],
  isDataLoaded: false,
  activeGroupName: 'All',
};

const contacts = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGroup, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeFavorite, (state, action) => {
      state.places = Util.getUpdatedContacts(action.payload.id, state.places, action.payload.newPlace);
    })
    .addCase(resetFavorites, (state, action) => {
      state.places = Util.resetFavoriteStates(action.payload);
    });
});

export {contacts};
