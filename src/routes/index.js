import { questions } from "questions";

export const maxIndex = questions.length - 1;

export const FIRST_QUESTION = "/questions/0";
export const LAST_QUESTION = `/questions/${maxIndex}`;
export const ANY_QUESTION = "/questions/:index";
export const SUMMARY = "/summary";

export const getIndexFromRoute = ({match}) => {
  if (match.params && match.params.index) {
    return parseInt(match.params.index, 10);
  }

  return null;
};

export const getPrevQuestion = route => `/questions/${getIndexFromRoute(route) - 1}`;

export const getNextQuestion = route => `/questions/${getIndexFromRoute(route) + 1}`;

export const isLastQuestion = route => getIndexFromRoute(route) === maxIndex;

export const isFirstQuestion = route => getIndexFromRoute(route) === 0;
