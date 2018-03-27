import { PURGE } from "redux-persist";

export const purge = () => ({
  type: PURGE,
  result: () => {}
});
