/*
 *
 * StartClass actions
 *
 */

import { uploadImageFrame as uploadImageFrameEndpoint } from 'api/trainning';

import {
  TOGGLE_ACTIVE_CLASS,
  FINISH_CLASS,
  UPLOAD_IMAGE_FRAME,
  WEBCAM_HAS_BEEN_ALLLOWED,
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

export const uploadImageFrame = (id, image) => ({
  type: UPLOAD_IMAGE_FRAME,
  promise: uploadImageFrameEndpoint(id, image),
});

export const webcamAllowed = () => ({
  type: WEBCAM_HAS_BEEN_ALLLOWED,
});
