/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_ADD_WIN,
  UPDATE_WINS,
} from './constants';

const initialState = fromJS({
  showAddWin: false,
  wins: {},
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_WIN: {
      const current = state.get('showAddWin');
      return state.set('showAddWin', !current);
    }
    case UPDATE_WINS:
      return state.set('wins', fromJS(Object.values(action.payload)));
    default:
      return state;
  }
}

export default homePageReducer;
