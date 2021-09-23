import {NameSpace} from '../root-reducer';

export const getPlaces = (state) => state[NameSpace.PLACES].places;
export const getIsDataLoaded = (state) => state[NameSpace.PLACES].isDataLoaded;
export const getActiveGroupName = (state) => state[NameSpace.PLACES].activeGroupName;
