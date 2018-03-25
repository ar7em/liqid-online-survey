export const REPLY = "REPLY";

export const reply = (questionIndex, answer) => ({
  type: REPLY,
  payload: {
    questionIndex,
    answer
  }
});
