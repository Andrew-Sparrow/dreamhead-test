import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GROUP: 'contacts/changeGroup',
  LOAD_CONTACTS: 'contacts/loadContacts',
  REMOVE_NEARBY_PLACES: 'places/removeNearbyPlaces',
  CHANGE_FAVORITE: 'places/isFavorite',
  LOAD_COMMENTS: 'comments/loadComments',
  REMOVE_COMMENTS: 'comments/removeComments',
  CHANGE_LOGIN: 'user/changeLogin',
  LOGOUT: 'user/logout',
  SEND_COMMENT: 'comment/sendComment',
  SEND_COMMENT_RATING: 'comment/sendCommentRating',
  RESET_FAVORITES: 'places/resetFavorites',
  REDIRECT_TO_ROUTE: 'places/redirectToRoute',
};

export const changeGroup = createAction(
  ActionType.CHANGE_GROUP,
  (groupName) => ({payload: groupName}),
);

export const loadContacts = createAction(
  ActionType.LOAD_CONTACTS,
  (contacts) => ({payload: contacts}),
);

export const removeNearbyPlaces = createAction(ActionType.REMOVE_NEARBY_PLACES);

export const loadComments = createAction(
  ActionType.LOAD_COMMENTS,
  (comments) => ({payload: comments}),
);

export const removeComments = createAction(ActionType.REMOVE_COMMENTS);

export const changeLogin = createAction(
  ActionType.CHANGE_LOGIN,
  (login) => ({payload: login}),
);

export const changeFavorite = createAction(
  ActionType.CHANGE_FAVORITE,
  (id, newPlace) => ({payload: {id, newPlace}}),
);

export const logout = createAction(ActionType.LOGOUT);

export const resetFavorites = createAction(
  ActionType.RESET_FAVORITES,
  (places) => ({payload: places}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);
