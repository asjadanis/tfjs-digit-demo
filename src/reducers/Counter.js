import { Actions } from "../actions/Counter";

const initialState = {
  counter: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case Actions.INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case Actions.DECREMENT_COUNTER:
      return {
        counter: state.counter - 1,
      };
    case Actions.RESET_COUNTER:
      return {
        counter: 0,
      };
    default:
      return state;
  }
}
