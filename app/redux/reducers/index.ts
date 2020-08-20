import {combineReducers} from 'redux';
import Current from './currentUserReducer';

export const reducers = combineReducers({
  CurrentUser: Current,
});
