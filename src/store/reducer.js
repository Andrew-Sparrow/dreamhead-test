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
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.CHANGE_FAVORITE:
      return {
        ...state,
        places: Util.getUpdatedPlaces(action.payload.id, state.contacts, action.payload.newPlace),
      };
    default:
      return state;
  }
}

export {reducer};
