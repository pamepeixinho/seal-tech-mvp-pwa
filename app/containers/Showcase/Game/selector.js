// import { createSelector } from 'reselect';

export const selectShowcaseDomain = (state) => state.get('showcase');

export const selectAnger = (state) => selectShowcaseDomain(state).get('anger');
export const selectContempt = (state) => selectShowcaseDomain(state).get('contempt');
export const selectDisgust = (state) => selectShowcaseDomain(state).get('disgust');
export const selectFear = (state) => selectShowcaseDomain(state).get('fear');
export const selectHappiness = (state) => selectShowcaseDomain(state).get('happiness');
export const selectNeutral = (state) => selectShowcaseDomain(state).get('neutral');
export const selectSadness = (state) => selectShowcaseDomain(state).get('sadness');
export const selectSurprise = (state) => selectShowcaseDomain(state).get('surprise');
export const selectCommitment = (state) => selectShowcaseDomain(state).get('commitment');
