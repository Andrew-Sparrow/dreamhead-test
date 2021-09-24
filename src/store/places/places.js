import {createReducer} from '@reduxjs/toolkit';
import Util from '../../util/util';

import {
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
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
    .addCase(changeCity, (state, action) => {
      state.activeGroupName = action.payload;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.places = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyPlaces, (state, action) => {
      state.nearbyPlaces = action.payload;
      state.isNearbyPlacesLoaded = true;
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
