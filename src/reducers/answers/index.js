import { PURGE } from "redux-persist";
import { REPLY } from "actions/answers";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REPLY:
      return Object.assign({}, state, {
        [payload.questionIndex]: payload.answer
      });
    case PURGE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
