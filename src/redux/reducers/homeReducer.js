import {combineReducers} from 'redux';

import {SET_LANGUAGE, SET_CATEGORY} from '../actions/types';

const language = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.lang;
    default:
      return state;
  }
};

const selectedCategory = (state = 1, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default combineReducers({language, selectedCategory});
