import {SET_LANGUAGE, SET_CATEGORY} from './types';

export const setLanguage = value => ({
  type: SET_LANGUAGE,
  lang: value,
});

export const setCategory = value => ({
  type: SET_CATEGORY,
  category: value,
});
