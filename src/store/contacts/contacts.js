import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadContacts,
  removeNearbyPlaces,
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
    .addCase(removeNearbyPlaces, (state) => {
      state.nearbyPlaces = [];
      state.isNearbyPlacesLoaded = false;
    })
    .addCase(changeFavorite, (state, action) => {
      state.places = Util.getUpdatedPlaces(action.payload.id, state.places, action.payload.newPlace);
    })
    .addCase(resetFavorites, (state, action) => {
      state.places = Util.resetFavoriteStates(action.payload);
    });
});

export {contacts};
