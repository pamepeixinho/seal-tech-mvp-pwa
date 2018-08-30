// import { createSelector } from 'reselect';

export const selectShowcaseDomain = (state) => state.get('showcase');

const FIXED_DECIMAL = 3;

export const selectAnger = (state) => selectShowcaseDomain(state).get('anger').toFixed(FIXED_DECIMAL);
export const selectContempt = (state) => selectShowcaseDomain(state).get('contempt').toFixed(FIXED_DECIMAL);
export const selectDisgust = (state) => selectShowcaseDomain(state).get('disgust').toFixed(FIXED_DECIMAL);
export const selectFear = (state) => selectShowcaseDomain(state).get('fear').toFixed(FIXED_DECIMAL);
export const selectHappiness = (state) => selectShowcaseDomain(state).get('happiness').toFixed(FIXED_DECIMAL);
export const selectNeutral = (state) => selectShowcaseDomain(state).get('neutral').toFixed(FIXED_DECIMAL);
export const selectSadness = (state) => selectShowcaseDomain(state).get('sadness').toFixed(FIXED_DECIMAL);
export const selectSurprise = (state) => selectShowcaseDomain(state).get('surprise').toFixed(FIXED_DECIMAL);
export const selectCommitment = (state) => {
  const commitmentRate = selectShowcaseDomain(state).get('commitment');
  const commitment = commitmentRate * (Math.random() * (50 - 10) + 10);  //eslint-disable-line
  return commitment.toFixed(FIXED_DECIMAL);
};

export const selectWon = (state) => selectShowcaseDomain(state).get('hasWon');
