/*
 *
 * StartClass actions
 *
 */

import {
  TOGGLE_ACTIVE_CLASS,
  FINISH_CLASS,
} from './constants';

export function toggleActiveClass() {
  return {
    type: TOGGLE_ACTIVE_CLASS,
  };
}

export function finishClass() {
  return {
    type: FINISH_CLASS,
  };
}
