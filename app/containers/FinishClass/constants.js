export const UPDATE_GRADE = 'app/containers/HomePage/UPDATE_GRADE';
export const UPDATE_QUESTION_BY_TYPE = 'app/containers/HomePage/UPDATE_QUESTION_BY_TYPE';

export const OPEN_QUESTIONS_SUBJECT = {
  interesting: {
    key: 'interesting',
    question: 'O assunto é interessante e gostaria de saber mais sobre.',
  },
  previousKnowledge: {
    key: 'previousKnowledge',
    question: 'Tenho conhecimento prévio sobre o assunto.',
  },
  attention: {
    key: 'attention',
    question: 'A aula aborda um conteúdo difícil que requer extrema concentração.',
  },
  longVideo: {
    key: 'longVideo',
    question: 'A duração do vídeo é longa demais, fazendo com que o foco se perca no fim.',
  },
  tooMuchContent: {
    key: 'tooMuchContent',
    question: 'O Vídeo aborda conteúdo demais, tornando difícil a absorção.',
  },
};

export const OPEN_QUESTIONS_RYTHM = {
  noPause: {
    key: 'noPause',
    question: 'É possível acompanhar o vídeo sem precisar pausar e revisitar trechos.',
  },
  moreDynamic: {
    key: 'moreDynamic',
    question: 'O vídeo é moroso e maçante, poderia ser mais dinâmico.',
  },
};

export const OPEN_QUESTIONS_DIDACTICS = {
  likeDidactics: {
    key: 'likeDidactics',
    question: 'A maneira como o conteúdo é apresentado se conecta com a minha maneira de aprender.',
  },
  goodExamples: {
    key: 'goodExamples',
    question: 'As explicações e analogias são claras e os exemplos são esclarecedores.',
  },
};

export const OPEN_QUESTIONS_COMMITMENT = {
  goodExperience: {
    key: 'goodExperience',
    question: 'A experiência foi proveitosa',
  },
  haveCommitment: {
    key: 'haveCommitment',
    question: 'Me senti engajado com o vídeo.',
  },
  continueVideosLikeThis: {
    key: 'continueVideosLikeThis',
    question: 'Continuaria a ver mais vídeos sobre o mesmo assunto.',
  },
  recommendVideo: {
    key: 'recommendVideo',
    question: 'Recomendaria o vídeo para um colega.',
  },
};
