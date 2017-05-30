/*
 *
 * MyWins reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_ADD_WIN,
} from './constants';

const initialState = fromJS({
  showAddWin: false,
});

function myWinsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_WIN: {
      const current = state.get('showAddWin');
      return state.set('showAddWin', !current);
    }
    default:
      return state;
  }
}

export default myWinsReducer;
