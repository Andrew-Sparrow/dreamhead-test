import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeGroup,
  loadPlaces,
  removeNearbyPlaces,
  changeFavorite,
  resetFavorites
} from '../actions';

const initialState = {
  places: [],
  isDataLoaded: false,
  activeGroupName: 'All',
};

const places = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGroup, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.places = action.payload;
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

export {places};
