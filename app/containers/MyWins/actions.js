/*
 *
 * MyWins actions
 *
 */

import {
  TOGGLE_ADD_WIN,
  SUBMIT_WIN,
  DELETE_WIN,
} from './constants';

export function toggleAddWin() {
  return {
    type: TOGGLE_ADD_WIN,
  };
}

export function submitWin(payload) {
  return {
    type: SUBMIT_WIN,
    payload,
  };
}

export function deleteWin(payload) {
  return {
    type: DELETE_WIN,
    payload,
  };
}

