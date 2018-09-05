// import { createSelector } from 'reselect';

export const selectShowcaseDomain = (state) => state.get('showcase');

const FIXED_DECIMAL = 3;

export const selectAnger = (state) => {
  const anger = selectShowcaseDomain(state).get('anger');
  try {
    return anger.toFixed(FIXED_DECIMAL);
  } catch (error) {
    return 0;
  }
};
export const selectContempt = (state) => {
  try {
    const contempt = selectShowcaseDomain(state).get('contempt').toFixed(FIXED_DECIMAL);
    return contempt;
  } catch (error) {
    return 0;
  }
};
export const selectDisgust = (state) => {
  try {
    return selectShowcaseDomain(state).get('disgust').toFixed(FIXED_DECIMAL);
  } catch (error) {
    return 0;
  };
};
export const selectFear = (state) => {
  try {
    const fear = selectShowcaseDomain(state).get('fear').toFixed(FIXED_DECIMAL);
    return fear;
  } catch (error) {
    return 0;
  }
};
export const selectHappiness = (state) => {
  try {
    const hap = selectShowcaseDomain(state).get('happiness').toFixed(FIXED_DECIMAL);
    return hap;
  } catch (error) {
    return 0;
  }
} 
export const selectNeutral = (state) => {
  try {
    const neutral = selectShowcaseDomain(state).get('neutral').toFixed(FIXED_DECIMAL);
    return neutral;
  } catch (error) {
    return 0;
  }
};
export const selectSadness = (state) => {
  try {
    const sadness = selectShowcaseDomain(state).get('sadness').toFixed(FIXED_DECIMAL);
    return sadness;  
  } catch (error) {
    return 0;
  }
} ;
export const selectSurprise = (state) => {
  try {
    const surprise = selectShowcaseDomain(state).get('surprise').toFixed(FIXED_DECIMAL);
    return surprise;
  } catch (error) {
    return 0;
  }
}

const selectEmptyEmotions = (state) => {
  const anger = selectAnger(state);
  const contempt = selectContempt(state);
  const disgust = selectDisgust(state);
  const fear = selectFear(state);
  const hapi = selectHappiness(state);
  const neutral = selectNeutral(state);
  const sad = selectSadness(state);
  const surprise = selectSurprise(state);

  return Number(anger) === 0 && Number(contempt) === 0 && Number(disgust) === 0 && Number(fear) === 0
    && Number(hapi) === 0 && Number(neutral) === 0 && Number(sad) === 0 && Number(surprise) === 0;
};

export const selectCommitment = (state) => {
  const commitmentRate = selectShowcaseDomain(state).get('commitment');
  const emptyEmotions = selectEmptyEmotions(state);

  // WORKAROUND: when there's no one
  if (commitmentRate === 0 && emptyEmotions === false) {
    return 0;
  }

  try {
    let commitment = commitmentRate + 0.05 * (Math.random() * (170 - 2) + 10);  //eslint-disable-line 
    commitment = commitment.toFixed(FIXED_DECIMAL);
    return commitment;
  } catch (error) {
    return 0;
  }
};

export const selectWon = (state) => selectShowcaseDomain(state).get('hasWon');
