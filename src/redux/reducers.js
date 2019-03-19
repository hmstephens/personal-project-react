import { combineReducers } from 'redux';
import {
  UPDATE_USERNAME,
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS
} from './actions';

const userNameReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      state = {...state, userName = action.payload};
      break;
    }
    default:
      return state;
  }
};

const isListLoading = (state = {}, action) => {
  switch (action.type) {
    case LIST_FETCH_START:
      return true;
    case LIST_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const userData = (state = {}, action) => {
  switch (action.type) {
    case LIST_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  userNameReducer,
  isListLoading,
  userData
});
