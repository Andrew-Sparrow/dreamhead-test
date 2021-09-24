import {ActionType} from './actions';

import Util from '../util/util';
import {groupNames} from '../const';

const initialState = {
  activeGroupName: groupNames.ALL,
  contacts: [],
  comments: [],
  isDataLoaded: false,
  isCommentsLoaded: false,
  isNearbyPlacesLoaded: false,
  isCommentSending: false,
  isShowCommentErrorMessage: false,
  isCommentFormSendedSuccessfully: null,
  commentErrorMessage: null,
  nearbyPlaces: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS: {
      return {
        ...state,
        isCommentSending: action.payload,
      };
    }
    case ActionType.CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS: {
      return {
        ...state,
        isCommentFormSendedSuccessfully: action.payload,
      };
    }
    case ActionType.SHOW_COMMENT_ERROR_MESSAGE: {
      return {
        ...state,
        isShowCommentErrorMessage: action.payload.isShowErrorMessage,
        commentErrorMessage: action.payload.errorMessageText,
      };
    }
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCityName: action.payload,
      };
    }
    case ActionType.CHANGE_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REMOVE_NEARBY_PLACES:
      return {
        ...state,
        nearbyPlaces: [],
        isNearbyPlacesLoaded: false,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.REMOVE_COMMENTS:
      return {
        ...state,
        comments: [],
        isCommentsLoaded: false,
      };
    case ActionType.CHANGE_FAVORITE:
      return {
        ...state,
        places: Util.getUpdatedPlaces(action.payload.id, state.contacts, action.payload.newPlace),
      };
    case ActionType.CHANGE_LOGIN:
      return {
        ...state,
        loginValue: action.payload,
      };
    default:
      return state;
  }
}

export {reducer};
