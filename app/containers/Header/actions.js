/*
 *
 * Header actions
 *
 */

import {
  TOGGLE_SHOW_SIGN_IN,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
} from './constants';

export function toggleShowSignIn() {
  return {
    type: TOGGLE_SHOW_SIGN_IN,
  };
}

export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signInSuccess(payload) {
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS,
  };
}
