import { combineReducers } from "redux";
import questions from "reducers/questions";
import answers from "reducers/answers";

export default combineReducers({
  questions,
  answers
});
