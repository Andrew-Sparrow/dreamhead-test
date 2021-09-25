import {
  loadContacts,
  loadComments,
  changeLogin,
  changeFavorite,
  logout as userLogout,
  redirectToRoute
} from './actions';

import {APIRoute, AppRoute} from '../const';

export const fetchContactsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.CONTACTS)
    .then(({data}) => {
      dispatch(loadContacts(data));
    })
    .catch((err) => {})
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS }/${id}`)
    .then((info) => {
      dispatch(loadComments(info.data));
    })
    .catch((err) => {})
);

export const addToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE }/${id}/${isFavorite ? 1 : 0}`)
    .then((info) => {
      dispatch(changeFavorite(id, info.data));
    })
    .catch((err) => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  localStorage.removeItem('token');
  localStorage.removeItem('login');
  api.post(APIRoute.LOGIN, {email, password})
    .then((info) => {
      localStorage.setItem('token', info.data.token);
      localStorage.setItem('login', info.data.email);
      dispatch(changeLogin(info.data.email));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
    .catch((err) => {});
};

export const logout = () => (dispatch, _getState, api) => {
  localStorage.removeItem('token');
  localStorage.removeItem('login');

  api.delete(APIRoute.LOGOUT)
    .then(() => {
      dispatch(userLogout());
    });
};
