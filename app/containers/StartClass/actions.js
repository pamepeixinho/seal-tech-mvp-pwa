/*
 *
 * StartClass actions
 *
 */

import { uploadImageFrame as uploadImageFrameEndpoint } from 'api/train';

import {
  TOGGLE_ACTIVE_CLASS,
  FINISH_CLASS,
  UPLOAD_IMAGE_FRAME,
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

export const uploadImageFrame = (id, image) => {
  debugger;
  return ({
    type: UPLOAD_IMAGE_FRAME,
    promise: uploadImageFrameEndpoint(id, image),
  });
};
