export const Actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER",
  RESET_COUNTER: "RESET_COUNTER",
};

export const incrementCounter = () => ({
  type: Actions.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: Actions.DECREMENT_COUNTER,
});

export const resetCounter = () => ({
  type: Actions.RESET_COUNTER,
});
