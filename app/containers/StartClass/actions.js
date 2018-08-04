/*
 *
 * StartClass actions
 *
 */

import {
  TOGGLE_ACTIVE_CLASS,
} from './constants';

export function toggleActiveClass() {
  return {
    type: TOGGLE_ACTIVE_CLASS,
  };
}
