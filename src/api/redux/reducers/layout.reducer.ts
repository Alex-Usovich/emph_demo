import { ACTIONS } from '../actions/actions';

export const layout =
  (state = { darkened: false }, action) => {
    switch (action.type) {
      case ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_ON:
        return {
          ...state,
          darkened: true
        };
      case ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_OFF:
        return {
          ...state,
          darkened: false
        };
      case ACTIONS.DARKENED_ACTIONS.DARKENED_LAYOUT_TOGGLE:
        return {
          ...state,
          darkened: !state.darkened
        };
      default:
        return state;
    }
  };
