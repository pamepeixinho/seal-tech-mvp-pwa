/*
 *
 * StartClass actions
 *
 */

import { fetch } from '../../api/fake';
import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
    promise: fetch(DEFAULT_ACTION),
  };
}
