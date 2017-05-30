/*
 *
 * HomePage actions
 *
 */

import {
  LIKE_CLICK,
} from './constants';

export function likeClick(payload) {
  return {
    type: LIKE_CLICK,
    payload,
  };
}

