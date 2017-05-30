/*
 *
 * UserWins reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
} from './constants';

const initialState = fromJS({
  selectedUser: null,
});

function userWinsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.set('selectedUser', action.payload);
    default:
      return state;
  }
}

export default userWinsReducer;
