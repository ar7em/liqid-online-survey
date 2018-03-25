import { questions } from "questions";

const initialState = questions;

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
