/*
 *
 * HomePage actions
 *
 */

import {
  TOGGLE_ADD_WIN,
  UPDATE_WINS,
  SUBMIT_WIN,
} from './constants';

export function toggleAddWin() {
  return {
    type: TOGGLE_ADD_WIN,
  };
}

export function updateWins(payload) {
  return {
    type: UPDATE_WINS,
    payload,
  };
}

export function submitWin(payload) {
  return {
    type: SUBMIT_WIN,
    payload,
  };
}

