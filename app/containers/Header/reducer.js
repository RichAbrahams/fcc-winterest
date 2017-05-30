/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_SHOW_SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  UPDATE_WINS,
} from './constants';

const initialState = fromJS({
  showSignIn: false,
  wins: {},
  loaded: false,
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHOW_SIGN_IN: {
      const currentSignIn = state.get('showSignIn');
      return state.set('showSignIn', !currentSignIn);
    }
    case SIGN_IN_SUCCESS: {
      return state.merge(action.payload).set('showSignIn', false);
    }
    case SIGN_OUT_SUCCESS: {
      return state.set('showSignIn', false)
                  .delete('username');
    }
    case UPDATE_WINS:
      return state.set('wins', fromJS(action.payload))
                  .set('loaded', true);
    default:
      return state;
  }
}

export default headerReducer;
