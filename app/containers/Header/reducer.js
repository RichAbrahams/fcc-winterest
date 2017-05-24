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
} from './constants';

const initialState = fromJS({
  showSignIn: false,
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
    default:
      return state;
  }
}

export default headerReducer;
