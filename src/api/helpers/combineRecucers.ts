/**
 * Helper function to combine multiple reducer to make combined one
 *
 * @param reducers
 */
export const combineReducers =
  reducers => (state = {}, action) => {
    return Object.keys(reducers)
      .reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);

        return nextState;
      }, {});
  };

//
